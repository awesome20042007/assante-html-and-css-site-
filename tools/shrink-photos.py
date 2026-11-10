"""
Shrink photos so the website loads quickly.

Phone photos are often 3 to 8 MB. This tool makes a smaller copy of each photo
(longest side 1600 pixels, saved as a good-quality JPEG, usually 150 to 400 KB)
and fixes photos that would otherwise show up sideways.
Your original photos are never changed.

How to use (in the terminal, from the project folder):

    python tools/shrink-photos.py "C:/path/to/my/photos" public/images/gallery

The first name is the folder with your original photos.
The second name is where the small copies are saved (it is created if needed).

Needs the Pillow package:   pip install pillow
"""

import sys
from pathlib import Path

from PIL import Image, ImageOps

MAX_SIZE = 1600     # longest side, in pixels
QUALITY = 82        # JPEG quality (higher = bigger file)
KINDS = {'.jpg', '.jpeg', '.png', '.webp', '.heic'}


def shrink(source: Path, target_folder: Path) -> Path:
    with Image.open(source) as img:
        img = ImageOps.exif_transpose(img)          # turn sideways photos upright
        img.thumbnail((MAX_SIZE, MAX_SIZE))         # only ever makes a photo smaller
        if img.mode != 'RGB':
            img = img.convert('RGB')                # JPEG has no transparency
        # Simple lowercase file names with dashes are safest on a website
        name = source.stem.lower().replace(' ', '-').replace('_', '-') + '.jpg'
        target = target_folder / name
        img.save(target, 'JPEG', quality=QUALITY, optimize=True)
    return target


def main():
    if len(sys.argv) != 3:
        print(__doc__)
        sys.exit(1)

    source_folder = Path(sys.argv[1])
    target_folder = Path(sys.argv[2])
    if not source_folder.is_dir():
        print(f"I cannot find the folder: {source_folder}")
        sys.exit(1)
    target_folder.mkdir(parents=True, exist_ok=True)

    count = 0
    for photo in sorted(source_folder.iterdir()):
        if photo.suffix.lower() not in KINDS:
            continue
        try:
            result = shrink(photo, target_folder)
        except Exception as problem:                # keep going if one file is broken
            print(f"  skipped {photo.name}: {problem}")
            continue
        before = photo.stat().st_size / 1024
        after = result.stat().st_size / 1024
        print(f"  {photo.name}  {before:,.0f} KB  ->  {result.name}  {after:,.0f} KB")
        count += 1
    print(f"Done. {count} photo(s) saved in {target_folder}")


if __name__ == '__main__':
    main()

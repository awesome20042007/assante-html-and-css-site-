# How to edit the website

This website is made of plain files: pages (`.html`), one stylesheet (`.css`) and photos.
There is no dashboard and nothing to install. You edit a file, save it, and look at it in your browser.

Everything the public sees is inside the **`public`** folder.

```text
public/
  index.html                  the home page
  about/index.html            About page
  leadership/index.html       Leadership page
  ministries/index.html       Ministries page
  services/index.html         Service times page
  events/index.html           Events page
  sermons/index.html          Sermons page
  gallery/index.html          Gallery page
  give/index.html             Give page
  contact/index.html          Contact page (with the message form)
  thank-you/index.html        Shown after someone sends a message
  404.html                    Shown when someone types a wrong address
  assets/css/style.css        All the colours and layout
  assets/js/main.js           The menu and small effects
  images/                     All photos (church/, events/, leaders/, ministries/, sermons/, gallery/)
  sitemap.xml, robots.txt     For Google
```

---

## 1. See your changes before anyone else does

**In VS Code:** open this whole project folder, then click **Go Live** at the bottom right.
(The project already has a setting so that Go Live opens the `public` folder.)

**Or in a terminal**, from the project folder:

```bash
python -m http.server 8080 --directory public
```

Then open http://127.0.0.1:8080/ in your browser. After every change: save the file, then press **Ctrl+F5** in the browser.

---

## 2. Changing words

Open the page, find the words, change them, save. Words sit between tags like `<p>` and `</p>`.
Never delete a `<` or `>` sign, and keep each opening tag with its closing tag.

**One detail appears on many pages** (the phone number, the email, the address). Use VS Code's
search across all files: press **Ctrl+Shift+H**, type the old text, type the new text, and click
**Replace All**. Check the list first so you only change what you mean to.

---

## 3. Common jobs

### Add a service time
A service appears in **two** places. Copy these and edit them.

On the **Services page** (`services/index.html`), add a row inside `<tbody>`:

```html
<tr>
  <td>Wednesday Service</td>
  <td>Wednesday</td>
  <td>6:00 PM – 8:00 PM</td>
</tr>
```

On the **home page** (`index.html`), add a line inside `<ul class="service-list">`:

```html
<li><strong>Wednesday Service</strong> — Wednesday, 6:00 PM – 8:00 PM</li>
```

### Add an event
An event also appears in **two** places: the home page and the Events page.
Paste the block inside the `<div class="grid grid-3" ... data-events-list>` box, in date order.
The most important part is `data-event-date="2027-01-31"` (year-month-day). **When that day has passed, the event
hides itself.** You can delete old events whenever you like to keep the page tidy.

On the **Events page** (can have a poster picture):

```html
<div class="card event-card" data-event-date="2027-01-31">
  <img src="/images/events/event-poster.jpg" alt="Short description of the poster" class="card-image" loading="lazy" decoding="async">
  <div class="event-date-badge">
    <span class="event-day">31</span>
    <span class="event-month">Jan</span>
  </div>
  <h2 class="subheading">Event name</h2>
  <p class="text-muted">Sunday, 31 January 2027 · 10:00 AM</p>
  <p class="text-muted">Where it is, and a short description of the event.</p>
</div>
```

On the **home page** (no picture, so it stays short):

```html
<div class="card event-card" data-event-date="2027-01-31">
  <div class="event-date-badge">
    <span class="event-day">31</span>
    <span class="event-month">Jan</span>
  </div>
  <h3>Event name</h3>
  <p class="text-muted">Sunday, 31 January 2027 · 10:00 AM</p>
</div>
```

### Add leaders
Open `leadership/index.html`. Delete the line that says *Content to be provided...* and paste in its place:

```html
<div class="grid grid-3" style="margin-top: var(--space-lg);">

  <div class="card leader-card">
    <img src="/images/leaders/pastor-name.jpg" alt="Pastor Name" class="leader-photo" loading="lazy" decoding="async">
    <h2 class="subheading">Pastor Name</h2>
    <p class="text-muted">Position, for example Senior Pastor</p>
    <p class="text-muted">A short biography.</p>
  </div>

  <div class="card leader-card">
    <h2 class="subheading">Leader without a photo</h2>
    <p class="text-muted">Position</p>
    <p class="text-muted">A short biography.</p>
  </div>

</div>
```

### Add ministries
Open `ministries/index.html`. Delete the line that says *Content to be provided...* and paste in its place:

```html
<div class="grid grid-3" style="margin-top: var(--space-lg);">

  <div class="card">
    <img src="/images/ministries/youth.jpg" alt="Youth ministry" class="card-image" loading="lazy" decoding="async">
    <h2 class="subheading">Youth Ministry</h2>
    <p class="text-muted">What this ministry does.</p>
    <p class="text-muted"><strong>Contact:</strong> 0700 000000</p>
  </div>

  <div class="card">
    <h2 class="subheading">Ministry without a photo</h2>
    <p class="text-muted">What this ministry does.</p>
  </div>

</div>
```

The home page has a small Ministries section too. To fill it, paste the same block there, and change each
`<h2 class="subheading">` and its closing `</h2>` to `<h3>` and `</h3>`.

### Add sermons
Open `sermons/index.html`. Delete the line that says *Content to be provided...* and paste in its place.
Copy the YouTube address from your browser into `href`. Leave out the picture line if you have no thumbnail.

```html
<div class="grid grid-3" style="margin-top: var(--space-lg);">

  <div class="card sermon-card">
    <img src="/images/sermons/sermon-1.jpg" alt="" class="sermon-thumb" loading="lazy" decoding="async">
    <h2 class="subheading">Sermon title</h2>
    <p class="text-muted">Speaker · 15 November 2026</p>
    <a href="https://www.youtube.com/watch?v=VIDEO-ID" class="btn btn-dark" target="_blank" rel="noopener">Watch <span class="visually-hidden">Sermon title (opens in a new tab)</span></a>
  </div>

</div>
```

### Add gallery photos
Open `gallery/index.html`. Delete the line that says *Content to be provided...* and paste in its place.
Add one `<img ...>` line for every photo.

```html
<div class="gallery-grid" style="margin-top: var(--space-lg);">
  <img src="/images/gallery/worship-1.jpg" alt="Short description of the photo" loading="lazy" decoding="async">
  <img src="/images/gallery/worship-2.jpg" alt="Short description of the photo" loading="lazy" decoding="async">
  <img src="/images/gallery/baptism.jpg" alt="Short description of the photo" loading="lazy" decoding="async">
</div>
```

### Add a social media link
Open any page and look at the footer. Add this line next to the line that says *Social links coming soon*
(and delete that line). Do this **in every page**, because the footer is the same on all of them.

```html
<li><a href="https://www.facebook.com/YOUR-PAGE" aria-label="Follow Asante Church International on Facebook">Facebook</a></li>
```

---

## 4. Photos

Phone photos are often 3 to 8 MB. Put those on a website and pages become slow for everybody,
especially on mobile data. **Always shrink photos first.** This project has a tool for it.

```bash
python tools/shrink-photos.py "C:/Users/YourName/Pictures/church-photos" public/images/gallery
```

- The first name is the folder with your **original** photos (they are never changed).
- The second name is where the small copies go. Use `public/images/gallery`, `public/images/events`,
  `public/images/leaders`, `public/images/ministries` or `public/images/sermons`.
- A 8 MB photo becomes about 400 KB, and sideways photos are turned upright.
- It needs Pillow: `pip install pillow`.

In the page, the picture's address is `/images/gallery/file-name.jpg`. Always write a short
description in `alt="..."`. It is read aloud to people who cannot see the picture.

---

## 5. Changing the header or the footer

The header (menu) and the footer are the same on all pages, and each page has its own copy.
So if you change one, change it in every page. Use **Ctrl+Shift+H** (search all files): paste a
unique piece of the old line, type the new one, and **Replace All**.

---

## 6. Changing colours

Open `public/assets/css/style.css`. The first section holds every colour in the website, for example
`--primary-color: #3b1f6e;` (the purple) and `--accent-color: #c9a227;` (the gold).
Change a colour there and it changes everywhere.

---

## 7. Before you publish a change

1. Look at the pages in the preview, on a narrow window as well as a wide one.
2. Click the main links and the menu.
3. Read what you wrote once more, especially times, dates and phone numbers.
4. If you added photos, check that they were shrunk first.
5. Publish (see `README.md`).

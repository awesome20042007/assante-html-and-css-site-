# Asante Church International: website

The official website of **Asante Church International**, Kasangati Town Council, Uganda.

This is a **plain HTML and CSS website**. There is no database, no server program and no dashboard,
so it can be hosted for free (or very cheaply) and has almost nothing that can break or be hacked.
It looks the same as the Django version of the site, which is kept separately.

## What is in this folder

| Name | What it is |
|---|---|
| `public/` | **The website.** This is the only folder that gets published. |
| `tools/shrink-photos.py` | Makes photos smaller before you add them. |
| `HOW-TO-EDIT.md` | How to change text, add events, photos and more. **Read this next.** |
| `.vscode/settings.json` | Makes the **Go Live** button in VS Code open the right folder. |

## See it on your computer

```bash
python -m http.server 8080 --directory public
```

Open http://127.0.0.1:8080/ in your browser. (Or click **Go Live** in VS Code.)

## Before you publish: three things to fill in

Search for these words across all files (VS Code: **Ctrl+Shift+H**).

1. **`YOUR-DOMAIN.org`** appears in every page, in `sitemap.xml` and in `robots.txt`.
   Replace it, in one go, with the real web address, for example `asantechurchinternational.org`
   (without `https://`; that part is already there).
   If the church has no web address yet, publish first, then use the address the host gives you
   (like `asante-church.pages.dev`), and repeat this step when the real address arrives.
2. **`YOUR_WEB3FORMS_ACCESS_KEY`** appears once, in `public/contact/index.html`. This is what makes the
   contact form send messages to the church email.
   - Go to **web3forms.com** and ask for an access key, using the church email address.
   - The key is emailed to that address. Copy it and replace the text.
   - The key is visible in the page code. That is normal for this service. The form also has a hidden
     spam trap. The free plan has a monthly limit on messages (about 250 at the time of writing), and messages
     only arrive by email, so keep an eye on the inbox and the spam folder.
3. **Placeholders and empty sections.** Pages that still say *Content to be provided by Asante Church International.*
   are waiting for the pastor's details: leaders, ministries, sermons, photos and social links. `HOW-TO-EDIT.md`
   has ready-made blocks for each. You can publish first and fill them in later.

## Publishing (free option): Cloudflare Pages

Cloudflare's free static hosting has no bandwidth charge and allows your own web address with free https.
Their menus change from time to time. If a name below differs a little, look for the closest one.

1. Make a free account at **cloudflare.com**.
2. In the dashboard, open **Workers & Pages**, choose **Create**, choose **Pages**, then **Upload assets**
   (also called *Direct Upload*).
3. Give the project a name, for example `asante-church`.
4. Upload **the contents of the `public` folder**: `index.html` must be at the top level of what you upload.
   Then click **Deploy**.
5. You get an address like `asante-church.pages.dev`. Open it on your phone and check every page.
6. To use your own web address: open the project, go to **Custom domains**, and follow the steps.
   Cloudflare shows exactly what to change where the domain was bought. Usually that means pointing the
   domain's *nameservers* to Cloudflare.
7. To publish a change later: edit, test, then upload `public` again as a new deployment.

## Publishing (other options)

- **Any normal web hosting with cPanel:** upload everything inside `public` (including the hidden `.htaccess` file) to the
  `public_html` folder, using the host's File Manager.
- **Other free static hosts** (Netlify, GitHub Pages and similar): they all work the same way. Upload `public`.

## Keep it safe

- Put this project in a private GitHub repository. It is your backup, and it keeps a history of every change.
- Keep the original, big photos somewhere safe too. Only the shrunk copies go in `public/images`.
- The hosting account and the web address should be registered in the **church's name**, with a second person
  who can get in.
- Hosting and the web address are renewed every year or month. If a payment is missed, the website goes offline.

## What is different from the Django version

| | Django version | This version |
|---|---|---|
| Church leaders edit content themselves | Yes, in a dashboard | No. Someone edits these files and publishes again |
| Contact messages | Saved in the dashboard | Arrive in the church email |
| Hosting | Needs a server that runs Python | Plain files, free hosting works |
| Photos shrink by themselves | Yes | No, use `tools/shrink-photos.py` |
| Look and feel | Same | Same |

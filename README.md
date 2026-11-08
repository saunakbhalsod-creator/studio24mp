# STUDIO 24MP — Photography Website

A responsive, dark editorial photography portfolio built with plain HTML, CSS and JavaScript. No paid dependencies, build tools or server required. Suitable for GitHub Pages.

## 1. Preview locally

Open `index.html` in your browser. The layout and filters work locally. To preview image loading reliably, run `python -m http.server 8000` from this folder and open `http://localhost:8000`.

## 2. Change your studio name

Open `index.html` in a text editor and replace:
- `STUDIO<span>24MP</span>` with your studio brand, preserving or changing the HTML styling as desired.
- `STUDIO 24MP` in the page title, footer and copyright.
- The About text with your own biography.
- `BENGALURU, INDIA` with your actual service area if different.
- The portfolio project titles and categories to reflect your actual work.

## 3. Add your photographs

Copy **your own** optimized JPG files to `assets/images/` using these exact filenames:

| File | Current category |
| --- | --- |
| portrait-01.jpg | Commercial |
| portrait-02.jpg | Cinematic |
| portrait-03.jpg | Outdoor |
| portrait-04.jpg | Cinematic |
| portrait-05.jpg | Commercial |
| portrait-06.jpg | Outdoor |

The site automatically replaces each gradient placeholder when the corresponding image exists. You can change filenames in `index.html` using the `data-image` attribute. Use portrait-oriented images (approximately 4:5) for best cropping; 1200–1800px wide and generally under 500 KB per image is a good starting point. Export to sRGB. Only use photos you have permission to publish, including consent from recognizable subjects and parents/guardians for minors.

To add a new gallery item, duplicate an `<article class="work-card" ...>` block in `index.html`, change `data-category` to `commercial`, `cinematic`, or `outdoor`, and update `data-image`, title and label.

## 4. Configure WhatsApp and email

Open `assets/script.js` and fill in:

```js
const CONTACT = {
  whatsappNumber: "919033762894", // replace with your number, no + or spaces
  email: "saunak.bhalsod@gmail.com"       // replace with your address
};
```

The WhatsApp button uses `wa.me` and the email button uses `mailto:`. There is no server-side contact form, so no personal data is stored by the website. Until these values are set, the contact buttons display configuration reminders.

## 5. Publish FREE with GitHub Pages

1. Sign in at https://github.com and create a new **public** repository, e.g. `photography-portfolio`.
2. Upload `index.html`, `assets/`, and your images to the repository root (do not upload the enclosing `noir-frame-studio` folder as an extra nesting level).
3. Open repository **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**; select `main` and `/ (root)`; save.
5. After deployment, visit `https://YOUR-USERNAME.github.io/photography-portfolio/`.

GitHub Pages publication may take a few minutes. The default `github.io` address is free. A custom domain is optional and normally costs money. GitHub Pages is a static host: this website intentionally uses WhatsApp/email links instead of a backend booking form.

## 6. Optional finishing touches

- Replace the hero gradient with your own wide photo by setting `.hero-image { background: url('images/hero.jpg') center/cover; }` in `assets/style.css`, and placing the file at `assets/images/hero.jpg`.
- Replace the About placeholder with your own photograph using a CSS background image on `.about-placeholder`.
- Update the SEO description and page title in `index.html`.
- Add your Instagram link in the footer if desired.
- Google Fonts are loaded over the internet; the site falls back to Georgia/Arial when offline.

## Important

All displayed gallery images are placeholders until you add your own. The copy and brand are sample content, not claims about actual clients or bookings. Review the text before publishing.


## Image troubleshooting (updated)
Place portrait-01.jpg through portrait-06.jpg in `assets/images/`. Windows Explorer may hide `.jpg` extensions: enable View > Show > File name extensions. The file names must match exactly, including case. The ZIP contains no personal photos; copy your own photos into this folder after extracting. Open `index.html` to test and press Ctrl+Shift+R after changes. If photos still do not show, open Chrome F12 > Console and look for `Photo not found` warnings.


## Image display fix
Portfolio photos now use `background-size: contain` so the complete photograph is visible without cropping. Empty space around differently shaped photographs is intentional. The included JPEG files have been optimized for faster loading while keeping their original aspect ratios.


## Masonry gallery update
The portfolio now uses a responsive, natural-aspect-ratio masonry gallery. Photographs are rendered as HTML images (not cropped CSS backgrounds). Portrait and landscape images retain their original proportions. Filters continue to work.

To replace a photograph, use the matching `portrait-01.jpg` through `portrait-06.jpg` filename in `assets/images/`. For best loading performance, export JPEGs at around 1600–2200 pixels on the long edge, typically under 500 KB each.


## Email contact update
The **SEND AN EMAIL** button opens Gmail's compose page in a new browser tab,
addressed to saunak.bhalsod@gmail.com with a prefilled subject and enquiry.
Visitors must sign in to Gmail and press Send themselves. The site does not
send email automatically. The email address is also displayed as a clickable
fallback (mailto link) in the contact section.

If you want an email form that sends messages without requiring Gmail,
you will need a form service or server-side email service.


## About-section photographer portrait
The About section now displays `assets/images/about-photographer.jpg` (the selected warm color portrait). To replace it, export a JPG with that filename. The image is shown at its full aspect ratio without cropping.

# Compass — Corporate Website (Front-End Development)

Production corporate website developed as a real-world front-end project with a focus on performance, accessibility, and SEO best practices.

🔗 [**Live Demo**](https://compass.spekter.solutions)  

---

## Project Overview

The project involved the full front-end implementation of the website, including responsive layout development, UI behavior, performance optimization, and accessibility improvements.

The focus of the work was to deliver a stable, fast, and scalable front-end solution aligned with real business and production requirements, ensuring clarity of content, predictable user experience, and strong technical quality across devices.

---

## Scope of Work

- Semantic HTML markup
- Responsive layout implementation across breakpoints
- UI behavior and interaction logic
- Performance optimization (Core Web Vitals)
- Accessibility improvements (A11Y)
- SEO-friendly page structure

---

## Tech Stack

- **HTML5** — semantic and accessible markup
- **CSS3 / SCSS** — modular styling, BEM methodology
- **JavaScript (Vanilla)** — lightweight UI and interaction logic
- **WebP / WebM** — optimized media formats for web delivery
- **Accessibility** — aria attributes, focus handling, modal roles  
- Mobile-first adaptive layout  

---

## Front-End Implementation Details

### Layout & UI

- Clear visual hierarchy and spacing system
- Card-based navigation and content blocks
- Sticky header with scroll-aware behavior
- Fully responsive layout (desktop / tablet / mobile)

### Performance Optimization

- Explicit image dimensions to prevent layout shifts
- Lazy loading for non-critical images
- Optimized media formats (WebP, WebM)
- Reduced render-blocking resources

### Accessibility

- Semantic heading structure
- Meaningful `alt` attributes
- Keyboard-friendly navigation
- Proper use of ARIA attributes
- `aria-current="page"` for active navigation states

### SEO Considerations

- Logical heading order
- Readable content structure
- Clean internal linking
- Fast initial load and low CLS

---

## Lighthouse Performance

Performance optimization was carried out as part of the front-end delivery process.

---

## 📊 Lighthouse Metrics — Before → After Optimization Main Page

| Metric            | Before                                   | After                                    | Improvement |
|-------------------|-------------------------------------------|-------------------------------------------|-------------|
| **Performance**   | ![](https://img.shields.io/badge/88-orange)  | ![](https://img.shields.io/badge/98-brightgreen)  | ↑ +29       |
| **Accessibility** | ![](https://img.shields.io/badge/84-orange) | ![](https://img.shields.io/badge/98-brightgreen) | ↑ +1        |
| **Best Practices**| ![](https://img.shields.io/badge/96-brightgreen) | ![](https://img.shields.io/badge/100-brightgreen) | ↑ +29       |
| **SEO**           | ![](https://img.shields.io/badge/66-orange) | ![](https://img.shields.io/badge/92-brightgreen) | —           |


### 🖼 Before / After 

| <img src="./media/lighthouse/before.png" width="420"/> | <img src="./media/lighthouse/after.png" width="420"/> |
|:--:|:--:|
| **Before** | **After** |

---

## 📊 Lighthouse Metrics — Before → After Optimization Blog Page

| Metric            | Before                                   | After                                    | Improvement |
|-------------------|-------------------------------------------|-------------------------------------------|-------------|
| **Performance**   | ![](https://img.shields.io/badge/63-orange)  | ![](https://img.shields.io/badge/99-brightgreen)  | ↑ +36       |
| **Accessibility** | ![](https://img.shields.io/badge/66-orange) | ![](https://img.shields.io/badge/100-brightgreen) | ↑ +34        |
| **Best Practices**| ![](https://img.shields.io/badge/100-brightgreen) | ![](https://img.shields.io/badge/100-brightgreen) | —       |
| **SEO**           | ![](https://img.shields.io/badge/82-orange) | ![](https://img.shields.io/badge/92-brightgreen) | ↑ +10           |


### 🖼 Before / After 

| <img src="./media/lighthouse/before-blog.png" width="420"/> | <img src="./media/lighthouse/after-blog.png" width="420"/> |
|:--:|:--:|
| **Before** | **After** |

---

### 🎯 JSON reports
- [Before JSON](./media/json/before.json)
- [After JSON](./media/json/after.json)
- [Before Blog JSON](./media/json/before-blog.json)
- [After Blog JSON](./media/json/after-blog.json)

---

## Project Structure

```  
prod/
 ├── assets/
 │    ├── css/
 │    ├── fonts/
 │    ├── img/
 │    │    ├── favicons/
 │    │    ├── gallery/
 │    │    ├── logos/
 │    │    ├── preload/
 │    │    ├── promo/
 │    │    └── og/
 │    ├── js/
 │    └── scss/
 ├── blog.html
 ├── index.html
 └── site.webmanifest
```

---

## Author

### Anzhelika Spekter  
UI/UX Product Designer & Front-End Developer

Front-end focus:
- Design-to-code workflows
- Performance-oriented UI implementation
- Scalable and maintainable front-end architecture


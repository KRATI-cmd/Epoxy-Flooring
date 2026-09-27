/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html'],
    theme: {
        extend: {
            colors: {
                // "brand-*" utilities read the active theme's CSS variables (see :root tokens in index.html)
                brand: Object.fromEntries([50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
                    .map((k) => [k, `rgb(var(--brand-${k}) / <alpha-value>)`])),
            },
        },
    },
};

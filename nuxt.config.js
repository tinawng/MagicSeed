module.exports = {
	// Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
	ssr: false,

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Magic ✨ Seed 🌱',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Magic ✨ Seed 🌱' }
		],
		htmlAttrs: {
			lang: 'en'
		},
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: [
		"@/assets/css/base.postcss"
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		html: {
			minify: {
				collapseBooleanAttributes: true,
				decodeEntities: true,
				minifyCSS: true,
				minifyJS: true,
				processConditionalComments: true,
				removeEmptyAttributes: true,
				removeRedundantAttributes: true,
				trimCustomFragments: true,
				useShortDoctype: true,
				minifyURLs: true,
				removeComments: true,
				removeEmptyElements: true
			}
		},
		postcss: {
			preset: {
				features: {
					// Fixes: https://github.com/tailwindcss/tailwindcss/issues/1190#issuecomment-546621554
					"focus-within-pseudo-class": false
				}
			}
		},
		splitChunks: {
			layouts: true
		},
		extend(config, { isDev, isClient }) {
			if (isDev && isClient) {
				// Run ESLint on save
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
			// use web as target when not using node integration 
			if (isClient) { config.target = 'web' }
			// use electron-renderer as target when node integration is in use
			// if (isClient) { config.target = 'electron-renderer' }
		}
	},

	render: {
		bundleRenderer: {
			shouldPreload: (file, type) => {
				if (type === 'font') return /.woff2/.test(file)
				return ['script', 'style'].includes(type)
			}
		}
	}
}

module.exports = {
  async redirects() {
    return [
      // {
      //   source: "/products",
      //   destination: "/menu",
      //   permanent: true,
      // },
      {
        source: "/about-us/our-history",
        destination: "/our-story-and-promise",
        permanent: true,
      },
      {
        source: "/about-us/our-promise",
        destination: "/our-story-and-promise",
        permanent: true,
      },
      {
        source: "/about-us/our-team",
        destination: "/hoagie-heroes",
        permanent: true,
      },
      {
        source: "/testimonials",
        destination: "/success-stories",
        permanent: true,
      },
      {
        source: "/about-us/join-our-team",
        destination: "/jobs",
        permanent: true,
      },
      {
        source: "/about-us/in-the-news",
        destination: "/news",
        permanent: true,
      },
      {
        source: "/about-us/contact-us",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/selling-tools",
        destination: "/fundraiser-resources",
        permanent: true,
      },
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: false,
            replaceAttrValues: {
              "#000": "currentColor",
            },
            svgProps: { focusable: "false" },
            titleProp: true,
          },
        },
      ],
    })

    return config
  },
}

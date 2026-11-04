module.exports = {
  pathPrefix: "/wedding",
  siteMetadata: {
    title: `우리의 결혼식에 초대합니다`,
    description: `소중한 날, 함께해 주세요.`,
    siteUrl: `https://YOUR_GITHUB_USERNAME.github.io`,
    image: `/og-image.jpg`
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          quality: 90,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          placeholder: `blurred`,
        },
      },
    },
    { resolve: `gatsby-transformer-sharp` },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `images`, path: `${__dirname}/src/images` },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `assets`, path: `${__dirname}/src/assets` },
    },
  ]
};

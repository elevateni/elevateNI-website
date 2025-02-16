module.exports = {
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: [
            { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
            { key: "X-Frame-Options", value: "DENY" },
            { key: "X-Content-Type-Options", value: "nosniff" },
            { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
            { 
                key: "Content-Security-Policy", 
                value: "default-src 'self'; img-src 'self' data:; script-src 'none'; style-src 'self' 'unsafe-inline';" 
              },
          ],
        },
      ];
    },
  };
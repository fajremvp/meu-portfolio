// src/config/site.config.ts

export const siteConfig = {
  // Global Branding & SEO
  author: "John Doe",         // Used in meta tags
  title: "john@shellfolio:~$", // Browser tab title
  description: "A highly performant, minimalist portfolio template built with Astro.js.",
  siteUrl: "https://your-domain.com", // Used for OpenGraph
  metaImage: "/og-image.png", // Placed in public/ directory

  themeColor: "#4af626",

  // Custom Prompt
  prompt: {
    user: "john",
    host: "shellfolio",
  },

  // Feature Toggles (Enable/Disable sections)
  features: {
    fastfetch: true,
    about: true,
    experiences: true,
    projects: true,
    education: true,
    skills: true,
    remotes: true,
    contact: true,
    wallets: false,   	// Set to false by default for generic users
    translations: true, // Set to false to disable the locale switcher and PT routing
    torMirror: false, 	// Set to false by default for generic users
  },

  // Sensitive/Specific Data
  onionAddress: "your-onion-address-here.onion",

  // Fastfetch ASCII Art (Use raw string template)
  asciiArt: `
  		':;;:;;;;;;:;;;:::;
             ,c:,'.............',;;;;;::;
           .l,,.........................,c.
         ,lc;'............................,;
       c::;'...............................,c
      :,''.......'''........................':'
     :''....,coodddol:,......................';,
     ;....:oxkkkkkkxxxdlc,....................';
    .,..,okkOOOOOOkkkkxxxddol:;'....  .........,
    ''.,dOOOOOOOOOOOkkkkxxxddolc::;,... .......'
    .'.ckOOOOOOOOkkkkkkkxkxddoolcc:;;,'........'
     :,dOOOOOOOOOkOkkkkkkkxxdoolcc::;;,.........
      ckOxooolloodxkOOOOkdoc::;:::::;;;;,.......
      co;,''..';;:ldxxxdl,...........',,;;.....
      ldolcccc;;;codxdl:,....',,'''...',;;''...,
     xkxoc;;;...';lxOxl'...,c,......''',;;;,'',::
     xOkxxxll:;:coxkkdc,'';:c:;,,''',;;,;;;,,,,.,
     l0OkkkxxddxxkOOxo:,,;:llllllclc::;;;;;,.','.
     ;0OOOOOkkkkkOOOxoc;,;codxxxxdol::;;;;,,..'.
      k0OOOOkxxkO00Odl:;:;,:odxxddol:;,,,,'''''
      cOkkkxodxkxodd:,..'..':cooolc:,,,,'..,,,
      ckxddlodxoc;;;'......',;::c:;,'''....,
      ;oxd:'.',,....,,...........;,'.......
      .;cl'..,:;:::cc:;,........ .........
       '';,':xxxxxxdoolc;,,,;:;...........
       ...'';dkxoc:,'''''',::;'......  ...
       .....':okdlc;''',;;;,'...        ..
        ......,;,,;,;,,''.....         ...
         . ...............            ..,.
          .....   .   .              ..',;
           ..  .                   ...'',;;
            :'..                 .....'',;:c.
            dxl'...          ........''',,;;:c;,,.
           .xkkkxol;,...............'''',,;;'.....;'
         .;lOOOOkkxdlc:;;,''',,''''',,,,,'..    .....';
      .,;,'xOOOkkkkxxdolc::cc::;;;;;;,..           .....',,
    ,;'.''.oOOOkkkkxxdolccclccc::::,.              ........'.`
};

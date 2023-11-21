type Text = {
  description: string;
  baseOn: string;
  website: string | any;
  github: string | any;
};
export interface DataProject {
  name: {
    title: string;
    text: Text;
  };
  feature: any;
  technology: {
    fontend: string;
    backend: string;
  };
}
export const project1 = {
  name: {
    title: 'Zing Mp3 Clone',
    text: {
      description: 'The website for listening to music',
      baseOn: 'https://zingmp3.vn.',
      website: 'https://zing-mp3-clone-eta.vercel.app',
      github: 'https://github.com/bmo4401/Zing-Mp3-Clone',
    },
  },
  feature: {
    song: 'play music with multiple modes (Next, Prev, Random, Repeat), watching MV, adjust volume, download songs, delete playlist, search song, infinite scroll.',
    user: 'login (Google, Github, Credentials), register, forget password (OTP), upload, like songs, change avatar.',
    responsive: 'Mobile, Tablet, PC.',
  },
  technology: {
    fontend:
      'Nextjs 13, TypeScript, Tailwind, HeadlessUI, React-Query, Zustand, Cloudinary, Next-Auth.',
    backend: 'MongoDB, Prisma, Nodemailer, Stripe',
  },
};

export const project2 = {
  name: {
    title: 'Clothing Store',
    text: {
      description: 'The e-commerce site for clothes.',
      baseOn: 'https://preview.colorlib.com/#ashion',
      website: {
        store: 'https://e-commerce-store-me.vercel.app',
        dashboard: 'https://e-commerce-admin-me.vercel.app',
      },
      github: {
        store: 'https://github.com/bmo4401/E-Commerce-Store_me',
        dashboard: 'https://github.com/bmo4401/E-Commerce-Admin_me',
      },
    },
  },
  feature: {
    store:
      'Display the list of items by type, in details, filter items, add items to cart, wishlist, dark mode',
    dashboard: 'CRUD billboards, categories, sizes, colors, products.',
    responsive: 'Mobile, Tablet, PC.',
  },
  technology: {
    fontend: 'Nextjs 13, TypeScript, Tailwind, ShadcnUI, Zustand.',
    backend: 'MySQL,  Prisma, ShadcnUI.',
  },
};

export const project3 = {
  name: {
    title: "What's App Clone",
    text: {
      description: 'The website for sending messages and making calls.',
      baseOn: 'https://www.whatsappcom.',
      website: 'https://whatsapp-clone-client.vercel.app',
      github: {
        client: 'https://github.com/bmo4401/Whatsapp-Clone-Client',
        server: 'https://github.com/bmo4401/Whatsapp-Clone-Server',
      },
    },
  },
  feature: {
    message: 'Send messages, images, voice recordings,emotions',
    chat: 'Voice, video call.',
    responsive: 'PC only.',
  },
  technology: {
    fontend:
      'Nextjs 13, TypeScript, Tailwind, Firebase, Zegocloud, Redux Toolkit',
    backend: 'Nestjs, Prisma, MySQL, Socket.io, JWT.',
  },
};

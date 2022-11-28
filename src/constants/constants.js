import { instagram, facebook, twitter, linkedin, projects ,a, b, c ,e} from "../assets";
export const navLinks = [
    {
      id: "home",
      title: "Home",
      to:"home"
    },
    {
      id: "features",
      title: "Projects",
      to:"projects"
    },
    {
      id: "product",
      title: "About",
      to:"about"
    },
    {
      id: "clients",
      title: "Contact",
      to:"contact"
    },
   
    {
      id:"button",
      title:"login"
    }
  ];
  export const footerLinks = [
    {
      title: "Useful Links",
      links: [
        {
          name: "Content",
          link: "https://www.hoobank.com/content/",
        },
        {
          name: "How it Works",
          link: "https://www.hoobank.com/how-it-works/",
        },
        {
          name: "Create",
          link: "https://www.hoobank.com/create/",
        },
        {
          name: "Explore",
          link: "https://www.hoobank.com/explore/",
        },
        {
          name: "Terms & Services",
          link: "https://www.hoobank.com/terms-and-services/",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          name: "Help Center",
          link: "https://www.hoobank.com/help-center/",
        },
        {
          name: "Partners",
          link: "https://www.hoobank.com/partners/",
        },
        {
          name: "Suggestions",
          link: "https://www.hoobank.com/suggestions/",
        },
        {
          name: "Blog",
          link: "https://www.hoobank.com/blog/",
        },
        {
          name: "Newsletters",
          link: "https://www.hoobank.com/newsletters/",
        },
      ],
    },
    {
      title: "Partner",
      links: [
        {
          name: "Our Partner",
          link: "https://www.hoobank.com/our-partner/",
        },
        {
          name: "Become a Partner",
          link: "https://www.hoobank.com/become-a-partner/",
        },
      ],
    },
  ];
  
  export const socialMedia = [
    {
      id: "social-media-1",
      icon: instagram,
      link: "https://www.instagram.com/",
    },
    {
      id: "social-media-2",
      icon: facebook,
      link: "https://www.facebook.com/",
    },
    {
      id: "social-media-3",
      icon: twitter,
      link: "https://www.twitter.com/",
    },
    {
      id: "social-media-4",
      icon: linkedin,
      link: "https://www.linkedin.com/",
    },
  ];
  export const projects1 =[
    {
      id:1,
      name:'Fund Raising for Flood',
      campaignBy:'Ali',
      Raised:5,
      Goal: 20,
      days:5,
      img:e,
      progress:40,
    },
    {
      id:2,
      name:'Fund Raising for Flood',
      campaignBy:'Ali',
      Raised:5,
      Goal: 20,
      days:5,
      img:a,
      progress:40,
    },
    {
      id:3,
      name:'Fund Raising for Flood',
      campaignBy:'Ali',
      Raised:5,
      Goal: 20,
      days:5,
      img:b,
      progress:40,
    },
    {
      id:4,
      name:'Fund Raising for Flood',
      campaignBy:'Ali',
      Raised:5,
      Goal: 20,
      days:5,
      img:c,
      progress:40,
    },
    {
      id:5,
      name:'Fund Raising for Flood',
      campaignBy:'Ali',
      Raised:5,
      Goal: 20,
      days:5,
      img:projects,
      progress:50,
    },
    {
      id:5,
      name:'Fund Raising for Flood',
      campaignBy:'Ali',
      Raised:5,
      Goal: 20,
      days:5,
      img:projects,
      progress:40,
    },
    
   
  ]
 export const pakPhoneRegex = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
 export const interRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
 export const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
 export const URL = 'http://127.0.0.1:3000'
 export const userRegex = /^[a-zA-Z\-]+$/;
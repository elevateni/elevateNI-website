(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2082:(e,t,s)=>{Promise.resolve().then(s.bind(s,9578))},9578:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>_});var a=s(5155),r=s(9561),l=s(7223),i=s(2823),n=s(2437),o=s(2115),c=s(2750),d=s(5565),x=s(2576),m=s(7364),h=s(9053),g=s(3463),p=s(9795);function u(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,p.QP)((0,g.$)(t))}var f=s(1290);let b=(0,s(1027).F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),j=o.forwardRef((e,t)=>{let{className:s,variant:r,size:l,asChild:i=!1,...n}=e,o=i?f.DX:"button";return(0,a.jsx)(o,{className:u(b({variant:r,size:l,className:s})),ref:t,...n})});j.displayName="Button";let N=o.createContext(null);function v(){let e=o.useContext(N);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let w=o.forwardRef((e,t)=>{let{orientation:s="horizontal",opts:r,setApi:l,plugins:i,className:n,children:c,...d}=e,[m,h]=(0,x.A)({...r,axis:"horizontal"===s?"x":"y"},i),[g,p]=o.useState(!1),[f,b]=o.useState(!1),j=o.useCallback(e=>{e&&(p(e.canScrollPrev()),b(e.canScrollNext()))},[]),v=o.useCallback(()=>{null==h||h.scrollPrev()},[h]),w=o.useCallback(()=>{null==h||h.scrollNext()},[h]),y=o.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),v()):"ArrowRight"===e.key&&(e.preventDefault(),w())},[v,w]);return o.useEffect(()=>{h&&l&&l(h)},[h,l]),o.useEffect(()=>{if(h)return j(h),h.on("reInit",j),h.on("select",j),()=>{null==h||h.off("select",j)}},[h,j]),(0,a.jsx)(N.Provider,{value:{carouselRef:m,api:h,opts:r,orientation:s||((null==r?void 0:r.axis)==="y"?"vertical":"horizontal"),scrollPrev:v,scrollNext:w,canScrollPrev:g,canScrollNext:f},children:(0,a.jsx)("div",{ref:t,onKeyDownCapture:y,className:u("relative",n),role:"region","aria-roledescription":"carousel",...d,children:c})})});w.displayName="Carousel";let y=o.forwardRef((e,t)=>{let{className:s,...r}=e,{carouselRef:l,orientation:i}=v();return(0,a.jsx)("div",{ref:l,className:"overflow-hidden",children:(0,a.jsx)("div",{ref:t,className:u("flex","horizontal"===i?"-ml-4":"-mt-4 flex-col",s),...r})})});y.displayName="CarouselContent";let k=o.forwardRef((e,t)=>{let{className:s,...r}=e,{orientation:l}=v();return(0,a.jsx)("div",{ref:t,role:"group","aria-roledescription":"slide",className:u("min-w-0 shrink-0 grow-0 basis-full","horizontal"===l?"pl-4":"pt-4",s),...r})});function D(){let e=o.useRef((0,c.A)({delay:2e3,stopOnInteraction:!1}));return(0,a.jsx)("section",{className:"py-24 relative bg-white/5",children:(0,a.jsxs)("div",{className:"container mx-auto px-4",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-transparent bg-clip-text",children:"Previous Sponsors"}),(0,a.jsx)(w,{plugins:[e.current],className:"w-full max-w-5xl mx-auto",loop:!0,children:(0,a.jsx)(y,{children:[{id:1,name:"LibertyIT",logoURL:"/images/Lib.png"},{id:2,name:"MCS Group",logoURL:"/images/MCS_Logo_Orange_White.png"},{id:3,name:"EY",logoURL:"/images/EYLogo.png"}].map(e=>(0,a.jsx)(k,{className:"md:basis-1/3",children:(0,a.jsx)("div",{className:"p-1",children:(0,a.jsxs)("div",{className:"bg-black/50 backdrop-blur-lg rounded-lg overflow-hidden border border-white/10",children:[(0,a.jsx)("div",{className:"w-full h-48 relative",children:(0,a.jsx)(d.default,{src:e.logoURL,alt:"".concat(e.name," logo"),fill:!0,style:{objectFit:"contain"}})}),(0,a.jsx)("div",{className:"p-6",children:(0,a.jsx)("h3",{className:"text-xl font-semibold mb-2 text-center",children:e.name})})]})})},e.id))})})]})})}function E(){let[e,t]=(0,o.useState)([]);return(0,o.useEffect)(()=>{(async function(){try{let e=await fetch("/api/images"),s=await e.json();t(s)}catch(e){console.error("Failed to fetch gallery images:",e)}})()},[]),(0,a.jsxs)("div",{className:"container mx-auto px-4 h-[800px]",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-transparent bg-clip-text",children:"Gallery"}),(0,a.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8",children:e.map(e=>(0,a.jsx)("div",{className:"bg-black/50 backdrop-blur-lg rounded-lg overflow-hidden border border-white/10",children:(0,a.jsx)("img",{src:e.url,alt:e.alt,className:"w-full h-48 object-cover rounded-lg"})},e.id))})]})}k.displayName="CarouselItem",o.forwardRef((e,t)=>{let{className:s,variant:r="outline",size:l="icon",...i}=e,{orientation:n,scrollPrev:o,canScrollPrev:c}=v();return(0,a.jsxs)(j,{ref:t,variant:r,size:l,className:u("absolute  h-8 w-8 rounded-full","horizontal"===n?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",s),disabled:!c,onClick:o,...i,children:[(0,a.jsx)(m.A,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Previous slide"})]})}).displayName="CarouselPrevious",o.forwardRef((e,t)=>{let{className:s,variant:r="outline",size:l="icon",...i}=e,{orientation:n,scrollNext:o,canScrollNext:c}=v();return(0,a.jsxs)(j,{ref:t,variant:r,size:l,className:u("absolute h-8 w-8 rounded-full","horizontal"===n?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",s),disabled:!c,onClick:o,...i,children:[(0,a.jsx)(h.A,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Next slide"})]})}).displayName="CarouselNext";var C=s(8173),L=s.n(C),R=s(6710);function A(){let[e,t]=(0,o.useState)(!1),s=(0,o.useCallback)((e,t)=>{e.preventDefault();let s=document.getElementById(t);if(s){let e=s.getBoundingClientRect().top+window.scrollY-80;window.scrollTo({top:e,behavior:"smooth"})}},[]);return(0,a.jsxs)("nav",{className:"relative",children:[(0,a.jsxs)(j,{variant:"ghost",size:"icon",className:"md:hidden",onClick:()=>t(!e),children:[(0,a.jsx)(R.A,{className:"h-6 w-6"}),(0,a.jsx)("span",{className:"sr-only",children:"Toggle menu"})]}),(0,a.jsx)("ul",{className:"".concat(e?"flex":"hidden"," md:flex flex-col md:flex-row absolute md:relative top-full right-0 mt-2 md:mt-0 bg-black md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none space-y-2 md:space-y-0 md:space-x-6"),children:["about","tickets","speakers","sponsors","gallery"].map(e=>(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#".concat(e),onClick:t=>s(t,e),className:"block py-2 md:py-0 hover:text-[#40E0D0] transition-colors",children:e.charAt(0).toUpperCase()+e.slice(1)})},e))})]})}function B(){let e=o.useRef((0,c.A)({delay:2e3,stopOnInteraction:!1}));return(0,a.jsx)("section",{className:"py-24 relative",children:(0,a.jsxs)("div",{className:"container mx-auto px-4",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-transparent bg-clip-text",children:"Previous Speakers"}),(0,a.jsx)(w,{plugins:[e.current],className:"w-full max-w-5xl mx-auto",loop:!0,children:(0,a.jsx)(y,{children:[{id:1,name:"Niamh Mallaghan",talkName:"Astrophysics for beginners",imageURL:"/images/speakers/niamh.png"},{id:2,name:"Kieron Portbury",talkName:"Police Abolition: the theory, the myths, and the praxis",imageURL:"/images/speakers/kieron.jpg"},{id:3,name:"Laura Kinkhead",talkName:"The role of Leadership in Early Childhood Education and Care",imageURL:"/images/speakers/laura.png"},{id:4,name:"Erin McGrattan",talkName:"Mental Health in Higher Education",imageURL:"/images/speakers/Erin.jpg"},{id:5,name:"Pritam Deka",talkName:"The role of Large Language Models in Artificial intelligence",imageURL:"/images/speakers/pritam.jpg"},{id:6,name:"Tiarnan Smyth",talkName:"Subcritical and Breedable",imageURL:"/images/speakers/Tiarnan.jpg"}].map(e=>(0,a.jsx)(k,{className:"md:basis-1/3",children:(0,a.jsxs)("div",{className:"p-1",children:[(0,a.jsx)("div",{className:"bg-black/50 backdrop-blur-lg rounded-lg overflow-hidden border border-white/10",children:(0,a.jsx)("div",{className:"w-full h-48 relative",children:(0,a.jsx)(d.default,{src:e.imageURL,alt:"".concat(e.name),fill:!0,style:{objectFit:"contain"}})})}),(0,a.jsxs)("div",{className:"p-6",children:[(0,a.jsx)("h3",{className:"text-xl font-semibold mb-2",children:e.name}),(0,a.jsx)("p",{className:"text-gray-400",children:e.talkName})]})]})},e.id))})})]})})}class S extends o.Component{static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.error("Error caught by ErrorBoundary:",e,t)}render(){return this.state.hasError?(0,a.jsxs)("div",{style:{textAlign:"center",padding:"50px"},children:[(0,a.jsx)("h1",{style:{fontSize:"48px",color:"#e74c3c"},children:"Something Went Wrong!"}),(0,a.jsx)("p",{children:this.state.errorMessage||"We encountered an error while loading the page."})]}):this.props.children}constructor(e){super(e),this.state={hasError:!1,errorMessage:""}}}function _(){return(0,a.jsx)(S,{children:(0,a.jsxs)("div",{className:"min-h-screen flex flex-col bg-black text-white",children:[(0,a.jsx)("header",{className:"py-4 backdrop-blur-lg bg-black/50 sticky top-0 z-50",children:(0,a.jsxs)("div",{className:"container mx-auto px-4 flex justify-between items-center",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)("div",{className:"w-8 h-8",children:(0,a.jsx)("div",{className:"w-full h-full relative"})}),(0,a.jsx)("img",{src:"/images/white_logo_2025.png",alt:"ElevateNI 2025 Logo",className:"w-60 h-30"})]}),(0,a.jsx)(A,{})]})}),(0,a.jsxs)("main",{className:"flex-grow",children:[(0,a.jsxs)("section",{className:"h-[60vh] flex items-center relative overflow-hidden",children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-to-br from-[#40E0D0]/20 to-[#9370DB]/20"}),(0,a.jsxs)("div",{className:"container mx-auto px-4 text-center relative z-10",children:[(0,a.jsx)("img",{src:"images/topImages/a-the-sun.jpg",className:"w-full h-72 object-cover"}),(0,a.jsx)("h2",{className:"text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-transparent bg-clip-text"}),(0,a.jsx)("div",{className:"mb-8",children:(0,a.jsxs)("div",{className:"inline-flex items-center space-x-4 text-2xl md:text-3xl font-light",children:[(0,a.jsx)("span",{className:"text-[#40E0D0]",children:"06"}),(0,a.jsx)("span",{className:"text-white/50",children:"|"}),(0,a.jsx)("span",{className:"text-[#9370DB]",children:"03"}),(0,a.jsx)("span",{className:"text-white/50",children:"|"}),(0,a.jsx)("span",{className:"text-white",children:"2025"})]})}),(0,a.jsx)(L(),{href:"https://docs.google.com/forms/d/e/1FAIpQLSerHK_2W2n8f9L7HWaPsTDW0_7BWsO6aexofxalmTR2G_5GkQ/viewform",children:(0,a.jsx)("button",{className:"px-6 py-3 bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity",children:"Register Now"})})]})]}),(0,a.jsx)("section",{id:"about",className:"py-24 relative",children:(0,a.jsxs)("div",{className:"container mx-auto px-4",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-transparent bg-clip-text",children:"Event Details"}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center text-center p-6 rounded-lg bg-white/5",children:[(0,a.jsx)(r.A,{className:"w-12 h-12 mb-4 text-[#40E0D0]"}),(0,a.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Date"}),(0,a.jsx)("p",{className:"text-gray-300",children:"March 6th, 2025"})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center text-center p-6 rounded-lg bg-white/5",children:[(0,a.jsx)(l.A,{className:"w-12 h-12 mb-4 text-[#9370DB]"}),(0,a.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Location"}),(0,a.jsx)("p",{className:"text-gray-300",children:"1 Elmwood Avenue, Belfast"}),(0,a.jsx)("p",{className:"text-gray-300",children:"Queen's Students' Union"})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center text-center p-6 rounded-lg bg-white/5",children:[(0,a.jsx)(i.A,{className:"w-12 h-12 mb-4 text-[#40E0D0]"}),(0,a.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Attendees"}),(0,a.jsx)("p",{className:"text-gray-300",children:"200+ Students"})]})]})]})}),(0,a.jsx)("section",{id:"tickets",className:"py-24 relative bg-white/5",children:(0,a.jsxs)("div",{className:"container mx-auto px-4 text-center",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold mb-12 bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-transparent bg-clip-text",children:"Tickets"}),(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center space-y-6",children:[(0,a.jsx)(n.A,{className:"w-24 h-24 text-[#9370DB]"}),(0,a.jsx)("p",{className:"text-2xl font-semibold text-gray-300",children:"Coming Soon"})]})]})}),(0,a.jsx)("section",{id:"speakers",children:(0,a.jsx)(B,{})}),(0,a.jsx)("section",{id:"sponsors",children:(0,a.jsx)(D,{})}),(0,a.jsx)("section",{id:"gallery",className:"h-96 md:h-96 lg:h-[500px] overflow-y-auto",children:(0,a.jsx)(E,{})}),(0,a.jsx)("section",{id:"register",className:"py-24 relative bg-white/5",children:(0,a.jsxs)("div",{className:"container mx-auto px-4 text-center",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold mb-8 bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-transparent bg-clip-text",children:"Join Us at ElevateNI 2025"}),(0,a.jsx)("p",{className:"text-xl mb-8 text-gray-300 max-w-2xl mx-auto",children:"Don't miss this opportunity to network, learn, and grow with Northern Ireland's student community."}),(0,a.jsx)(L(),{href:"https://docs.google.com/forms/d/e/1FAIpQLSerHK_2W2n8f9L7HWaPsTDW0_7BWsO6aexofxalmTR2G_5GkQ/viewform",children:(0,a.jsx)("button",{className:"px-6 py-3 bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity",children:"Register Now"})})]})})]}),(0,a.jsx)("footer",{className:"py-12 border-t border-white/10",children:(0,a.jsxs)("div",{className:"container mx-auto px-4",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-lg font-semibold mb-4 bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-transparent bg-clip-text",children:"Contact Us"}),(0,a.jsx)("p",{className:"text-gray-300",children:"Email: elevatniconf@qub.ac.uk"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-lg font-semibold mb-4 bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-transparent bg-clip-text",children:"Quick Links"}),(0,a.jsxs)("ul",{className:"space-y-2",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",className:"text-gray-300 hover:text-[#40E0D0] transition-colors",children:"Schedule"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",className:"text-gray-300 hover:text-[#40E0D0] transition-colors",children:"FAQs"})})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-lg font-semibold mb-4 bg-gradient-to-r from-[#40E0D0] to-[#9370DB] text-transparent bg-clip-text",children:"Follow Us"}),(0,a.jsxs)("div",{className:"flex space-x-4",children:[(0,a.jsx)("a",{href:"https://www.instagram.com/ElevateNI",className:"text-gray-300 hover:text-[#40E0D0] transition-colors",children:"Instagram"}),(0,a.jsx)("a",{href:"https://www.linkedin.com/company/elevateni",className:"text-gray-300 hover:text-[#40E0D0] transition-colors",children:"LinkedIn"}),(0,a.jsx)("a",{href:"https://www.facebook.com/ElevateNIConf/",className:"text-gray-300 hover:text-[#40E0D0] transition-colors",children:"Facebook"}),(0,a.jsx)("a",{href:"https://x.com/ElevateNI",className:"text-gray-300 hover:text-[#40E0D0] transition-colors",children:"Twitter"}),(0,a.jsx)("a",{href:"https://discord.gg/bJamuXFbG3",className:"text-gray-300 hover:text-[#40E0D0] transition-colors",children:"Discord"})]})]})]}),(0,a.jsx)("div",{className:"mt-12 text-center text-gray-400",children:(0,a.jsx)("p",{children:"\xa9 2025 ElevateNI Conference. All rights reserved."})})]})})]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[346,441,517,358],()=>t(2082)),_N_E=e.O()}]);
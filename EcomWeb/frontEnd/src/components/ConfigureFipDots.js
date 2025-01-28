import Versace from "../assets/Brands/versace.webp";
import DGImage from "../assets/FipImg.png"
import IPImage from "../assets/IP/1.png"
import TLImage from "../assets/IP/3.png"
import SMImage from "../assets/IP/4.png"
import APPImage from "../assets/IP/5.png"
const dotDataFip = [
  { title: "Fip Starts", key: 1, description: "Packets are captured at IPD.", myImg: IPImage},
  { title: "IP Layer", key: 2, description: "Extracts IP addresses from packets.", myImg: TLImage },
  { title: "Transport Layer", key: 3, description: "Extracts ports and MAC addresses.", myImg: SMImage },
  { title: "Session Creation", key: 4, description: "Identifies applications from packets.", myImg: APPImage },
  { title: "Application Layer", key: 4, description: "Identifies applications from packets.", myImg: DGImage },
  { title: "Final Layer", key: 5, description: "Processes like Fingerprinting occur here.", myImg: Versace },
];

export default dotDataFip;

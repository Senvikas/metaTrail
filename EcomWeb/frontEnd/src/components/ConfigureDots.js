
  import IPImage from "../assets/IP/1.png"
  import TLImage from "../assets/IP/2.png"
  import SMImage from "../assets/IP/3.png"
  import APPImage from "../assets/IP/4.png"
  import FeatureImage from "../assets/IP/5.png"
  const dotData = [
    // { title: "Packet Arrives", key: 1, description: "Packets are captured at IPD.", myImg: null},
    { title: "IP Layer", key: 2, description: "Extracts IP addresses from packets.", myImg:  IPImage},
    { title: "Transport Layer", key: 3, description: "Extracts ports and MAC addresses.", myImg: TLImage },
    { title: "Session Creation", key: 4, description: "Identifies applications from packets.", myImg:  SMImage},
    { title: "Application Layer", key: 4, description: "Identifies applications from packets.", myImg: APPImage },
    { title: "Features", key: 5, description: "Processes like Fingerprinting occur here.", myImg: FeatureImage },
  ];
  
  export default dotData;
  
  
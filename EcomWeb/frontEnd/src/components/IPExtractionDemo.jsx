import React from "react";
import pcapPng from '../assets/abc.png'
import pcapH from '../assets/pcapHeader.png'
import IPImg from '../assets/IP.png'
const IPExtractionDemo = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Understanding IP Extraction at IPD</h1>

      {/* Step 1: Full Packet Structure */}
      <div className="mb-12 text-center">
        <h2 className="text-xl font-semibold mb-4">Step 1: Packet Structure</h2>
        <img
          src={pcapH}
          alt="Packet Structure"
          className="w-full max-w-lg rounded shadow-lg"
        />
        <p className="mt-4 text-gray-700">
          A typical network packet contains multiple layers like the Ethernet Header,
          IP Header, and Payload.
        </p>
      </div>

      {/* Step 2: Focus on the IP Header */}
      <div className="mb-12 text-center">
        <h2 className="text-xl font-semibold mb-4">Step 2: Focus on the IP Header</h2>
        <img
          src={IPImg}
          alt="IP Header Highlight"
          className="w-full max-w-lg rounded shadow-lg"
        />
        <p className="mt-4 text-gray-700">
          The IP Header contains critical information like the Source IP and Destination IP.
          These fields are extracted by the IPD for further analysis.
        </p>
      </div>

      {/* Step 3: Extracting Source and Destination IPs */}
      <div className="mb-12 text-center">
        <h2 className="text-xl font-semibold mb-4">Step 3: Extracting IPs</h2>
        <img
          src="/images/ip-extraction.png"
          alt="IP Extraction"
          className="w-full max-w-lg rounded shadow-lg"
        />
        <p className="mt-4 text-gray-700">
          The IPD identifies and extracts the Source IP (192.168.1.1) and Destination IP
          (10.0.0.1) from the packet's IP Header.
        </p>
      </div>
    </div>
  );
};

export default IPExtractionDemo;

import React, { useState } from "react";
import PcapParser from "pcap-ng-parser"; // Install it: npm install pcap-ng-parser

const ExtractIPs = () => {
  const [ips, setIps] = useState([]);
  const [error, setError] = useState(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    if (!file) {
      setError("No file selected");
      return;
    }

    setError(null);
    setIps([]);

    try {
      const fileBuffer = await file.arrayBuffer(); // Read file as ArrayBuffer
      const parser = new PcapParser(fileBuffer);
      const extractedIPs = new Set();

      // Parse each packet
      for (const packet of parser) {
        if (packet.data && packet.data.length > 34) {
          const data = new Uint8Array(packet.data);

          // Extract source and destination IPs from IPv4 headers
          const srcIP = `${data[26]}.${data[27]}.${data[28]}.${data[29]}`;
          const dstIP = `${data[30]}.${data[31]}.${data[32]}.${data[33]}`;

          extractedIPs.add(srcIP);
          extractedIPs.add(dstIP);
        }
      }

      setIps([...extractedIPs]); // Convert Set to Array
    } catch (err) {
      console.error(err);
      setError("Failed to parse the PCAP file. Make sure it's valid.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8">Extract IPs from PCAP</h1>

      {/* File Input */}
      <input
        type="file"
        accept=".pcap, .pcapng"
        onChange={handleFileUpload}
        className="mb-4 p-2 border border-gray-300 rounded shadow-sm"
      />

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Display Extracted IPs */}
      {ips.length > 0 && (
        <div className="w-full max-w-2xl bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Extracted IPs</h2>
          <ul className="list-disc list-inside">
            {ips.map((ip, index) => (
              <li key={index} className="text-gray-700">
                {ip}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExtractIPs;

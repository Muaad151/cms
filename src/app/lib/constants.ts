  
export type TServerDetailProps = {
  name: string;
  ip: string;
  wanIP: string;
  cpu?: string;
  storage?: string;
  lastReboot?: string;
  memory?: string;
  uptime?: string;
  sshCMD: string
}

export const serverDetails: TServerDetailProps[] = [
  {
    name: "Server 1",
    ip: "192.168.48.16",
    wanIP: "192.168.1.101",
    sshCMD: "ssh root@192.168.1.101",
    cpu: "Intel Xeon E5-26080",
    storage: "2 TB SSD",
    lastReboot: "45 days",
    memory: "8 GB",
    uptime: "45 days",
  },
  {
    name: "Server 2",
    ip: "192.168.1.102",
    wanIP: "192.168.1.103",
    sshCMD: "ssh root@192.168.1.103",
    cpu: "AMD Ryzen 5 2600",
    storage: "2 TB SSD",
    lastReboot: "45 days",
    memory: "16 GB",
    uptime: "50 days",
  },
  {
    name: "Server 3",
    ip: "192.168.1.104",
    wanIP: "192.168.1.105",
    sshCMD: "ssh root@192.168.1.105",
    cpu: "Intel Xeon E5-26080",
    storage: "2 TB SSD",
    lastReboot: "45 days",
    memory: "8 GB",
    uptime: "45 days",
  },
  {
    name: "Server 4",
    ip: "192.168.1.106",
    wanIP: "192.168.1.107",
    sshCMD: "ssh root@192.168.1.107",
    cpu: "AMD Ryzen 7 2600",
    storage: "2 TB SSD",
    lastReboot: "45 days",
    memory: "16 GB",
    uptime: "50 days",
  },
  
]

export const BackendURL = "http://localhost:8000"
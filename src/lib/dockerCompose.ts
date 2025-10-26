import YAML from "yaml";

export function generateDockerCompose(
  type: "predictoor" | "trader",
  network: string,
  yamlFilename: string
): string {
  const data = {
    services: {
      [type]: {
        image: "ghcr.io/oceanprotocol/pdr-backend:latest",
        environment: ["PRIVATE_KEY=${PRIVATE_KEY}"],
        volumes: ["./:/work"],
        command: ["pdr", type, `/work/${yamlFilename}`, network],
        restart: "unless-stopped",
      },
    },
  };

  return YAML.stringify(data);
}

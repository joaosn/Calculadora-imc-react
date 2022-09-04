export type Level = {
  tittle: string;
  color: string;
  inco: "down" | "up";
  imc: Array<number>;
  yourImc?: number;
};

export const levels: Level[] = [
  { tittle: "Magreza", color: "#96a3ab", inco: "down", imc: [0, 18.5] },
  { tittle: "Normal", color: "#0ead69", inco: "up", imc: [18.5, 24.9] },
  { tittle: "SobrePeso", color: "#E2b039", inco: "down", imc: [25, 30] },
  { tittle: "Obsidade", color: "#C3423F", inco: "down", imc: [30.1, 99] },
];

export const calculateImc = (weight: number, height: number) => {
  let res = null;
  const imc = weight / (height * height);

  levels.map((level, index) => {
    if (imc >= level.imc[0] && imc <= level.imc[1]) {
      res = { ...levels[index], yourImc: imc };
    }
  });

  return res;
};

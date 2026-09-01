interface Formation {
  diplome: string;
  ecole: string;
  ville: string;
  debut: string;
  fin: string;
  id: string;
}

type FormationVille = Pick<Formation, "ville">;
type FormSeach = Partial<Formation>;
type FormationSansDate = Omit<Formation, "fin">;
type DiplomeParEcole = Record<string, number>;

type Exercice = Partial<Omit<Formation, "id" | "diplome">> & Pick<Formation, "id" | "diplome">;

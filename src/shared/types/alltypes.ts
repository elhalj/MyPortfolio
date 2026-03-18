export interface ConnexionPageProps {
  // Define any props if needed in the future
  _id?: string;
  pseudo: string;
  email: string;
  password: string;
}

export interface BlogFormPageProps {
  _id?: string;
  title: string;
  description: string;
  content: string;
  lecture: string;
  etat: string;
  image: string;
  author: string;
}

export interface BlogDocument extends BlogFormPageProps {
  slug?: string;
  date?: string;
  createdAt?: string;
  updatedAt?: string;
}

export type TitulosType = {
	Marca: string;
	Subtitulo: string;
	Titulo: string;
	Texto: string;
};

export type ServicioType = {
	[key: string]: any | undefined;
	nombre: string;
	descripcion: string;
	precio: string;
};

export type CategoriaType = {
	categoria: string;
	id: string;
	contenido: ServicioType[];
};

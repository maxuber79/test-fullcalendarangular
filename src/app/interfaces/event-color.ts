export interface Colores {
    colors: Color[];
}

export interface Color {
    red?:    hex[];
    blue?:   hex[];
    yellow?: hex[];
}

export interface hex {
    primary:   string;
    secondary: string;
}
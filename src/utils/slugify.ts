export const slugify = (text: string): string => {
  return text
    .normalize("NFD") // rozbij na znaki + diakrytyki
    .replace(/[\u0300-\u036f]/g, "") // usuń diakrytyki
    .replace(/ł/g, "l") // dodatkowo polskie znaki specyficzne
    .replace(/[^a-zA-Z0-9\s-]/g, "") // usuń inne znaki
    .trim()
    .replace(/\s+/g, "-") // zamień spacje na myślniki
    .toLowerCase();
};

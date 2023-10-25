export async function getMenu() {
  const res = await fetch(
    `https://raw.githubusercontent.com/vvviv205/MoH-shopping/main/Data/products.json`
  );
  if (!res.ok) throw Error("Failed getting menu");
  const dat = await res.json();
  const data = dat.products;
  console.log(data);
  return data;
}

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
  },
};

export async function buscarHoteis() {
  const params = new URLSearchParams({
    children_ages: "5,0",
    adults_number: "2",
    categories_filter_ids: "class::2,class::4,free_cancellation::1",
    page_number: "0",
    dest_type: "city",
    children_number: "2",
    order_by: "popularity",
    filter_by_currency: "BRL",
    room_number: "1",
    units: "metric",
    checkin_date: "2026-09-18",
    dest_id: "-553173",
    locale: "pt-br",
    checkout_date: "2026-09-19",
    include_adjacency: "true",
  });

  const url = `https://booking-com.p.rapidapi.com/v2/hotels/search?${params}`;

  const response = await fetch(url, options);

  if (!response.ok) {
    console.log("Status:", response.status);
    console.log("Resposta:", await response.text());
    throw new Error("Erro ao buscar hotéis");
  }

  return await response.json();
}
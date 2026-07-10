const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
  },
};

export async function buscarHoteis(
  destId: string,
  destType: string,
  checkin: string,
  checkout: string
) {
  const params = new URLSearchParams({
    children_ages: "5,0",
    adults_number: "2",
    categories_filter_ids:
      "class::2,class::4,free_cancellation::1",
    page_number: "0",
    dest_type: destType,
    children_number: "2",
    order_by: "popularity",
    filter_by_currency: "BRL",
    room_number: "1",
    units: "metric",
    checkin_date: checkin,
    dest_id: destId,
    locale: "pt-br",
    checkout_date: checkout,
    include_adjacency: "true",
  });

  const url =
    `https://booking-com.p.rapidapi.com/v2/hotels/search?${params}`;

  const response = await fetch(url, options);

  if (!response.ok) {
    console.log("Status:", response.status);
    console.log("Resposta:", await response.text());
    throw new Error("Erro ao buscar hotéis");
  }

  return await response.json();
}

export async function buscarDetalhesHotel(
  hotelId: string,
  checkin: string,
  checkout: string
) {
  const params = new URLSearchParams({
    hotel_id: hotelId,
    checkin_date: checkin,
    checkout_date: checkout,
    currency: "BRL",
    locale: "pt-br",
  });

  const url =
    `https://booking-com.p.rapidapi.com/v2/hotels/details?${params}`;

  const response = await fetch(url, options);

  if (!response.ok) {
    console.log("Status:", response.status);
    console.log("Resposta:", await response.text());
    throw new Error("Erro ao buscar detalhes do hotel");
  }

  return await response.json();
}

export async function buscarDescricaoHotel(hotelId: string) {
  const params = new URLSearchParams({
    hotel_id: hotelId,
    locale: "pt-br",
  });

  const url =
    `https://booking-com.p.rapidapi.com/v2/hotels/description?${params}`;

  const response = await fetch(url, options);

  if (!response.ok) {
    console.log("Status:", response.status);
    console.log("Resposta:", await response.text());
    throw new Error("Erro ao buscar descrição do hotel");
  }

  return await response.json();
}

export async function buscarFotosHotel(hotelId: string) {
  const params = new URLSearchParams({
    hotel_id: hotelId,
    locale: "pt-br",
  });

  const url =
    `https://booking-com.p.rapidapi.com/v1/hotels/photos?${params}`;

  const response = await fetch(url, options);

  if (!response.ok) {
    console.log("Status:", response.status);
    console.log("Resposta:", await response.text());
    throw new Error("Erro ao buscar fotos do hotel");
  }

  return await response.json();
}

export async function buscarLocal(nomeCidade: string) {
  const params = new URLSearchParams({
    name: nomeCidade,
    locale: "pt-br",
  });

  const url =
    `https://booking-com.p.rapidapi.com/v1/hotels/locations?${params}`;

  const response = await fetch(url, options);

  if (!response.ok) {
    console.log("Status:", response.status);
    console.log("Resposta:", await response.text());
    throw new Error("Erro ao buscar cidade");
  }

  return await response.json();
}
import { BACKEND_URL } from "@/url/url";
export async function getJobData(slug) {
  try {
    const response = await fetch(`${BACKEND_URL}/job/getById/${slug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        // Add any other headers as needed
      },
      next: { revalidate: 0 },
      cache: "no-store",
    });

    if (response.ok) {
      const data = await response.json();
      const Data = data?.data;
      return Data;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

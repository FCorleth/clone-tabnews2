export default async function Status(request, response) {
  const result = await response.status(200).json({ status: "OK" });
  return result;
}

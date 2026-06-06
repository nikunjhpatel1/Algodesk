export default async function handler(req, res) {
  const { symbol } = req.query;
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=6mo`;
  const response = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  const data = await response.json();
  res.status(200).json(data);
}

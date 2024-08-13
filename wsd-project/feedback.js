const getFeedbacks = async (id) => {
  const kv = await Deno.openKv();
  const feedbacks = await kv.get(["store", id]);
  return feedbacks.value ?? 0;
};

const increaseFeedback = async (id) => {
  const kv = await Deno.openKv();
  let feedbacks = await getFeedbacks(id);
  feedbacks++;
  await kv.set(["store", id], feedbacks);
};

export { getFeedbacks, increaseFeedback };

import React from "react";
import { useRouter } from "next/router";
import MemoryPlay from "../../src/components/Memory/Play";

const play = () => {
  const router = useRouter();
  const { id } = router.query;
  if (!id || id.length === 0 || typeof id !== "string") return null;
  return <MemoryPlay deckId={id} />;
};

export default play;

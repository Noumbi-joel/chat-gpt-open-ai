import { useEffect, useState } from "react";

type Props = {
  id: string;
  pathname: string | null;
};

function useStatus({ id, pathname }: Props) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!pathname) return;

    setActive(pathname.includes(id));
  }, [pathname]);

  return active;
}

export default useStatus;

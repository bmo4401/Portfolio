'use client';
import { MoonIcon } from '@/components/ui/icon/MoonIcon';
import { SunIcon } from '@/components/ui/icon/SunIcon';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';
const Mode = () => {
  const { mode, setMode } = useThemeSwitcher();
  return (
    <button
      onClick={() => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
      }}
    >
      {mode === 'dark' ? (
        <MoonIcon className="fill-white " />
      ) : (
        <SunIcon className="fill-dark " />
      )}
    </button>
  );
};
export default Mode;

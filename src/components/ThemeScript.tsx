import Script from "next/script";

export function ThemeScript() {
  const script = `
(function() {
  try {
    var t = localStorage.getItem('dimple-theme');
    if (t !== 'light' && t !== 'dark') t = 'dark';
    document.documentElement.setAttribute('data-theme', t);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

  return (
    <Script id="theme-script" strategy="beforeInteractive">
      {script}
    </Script>
  );
}

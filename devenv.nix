{ pkgs, ... }:

{
  packages = [
    pkgs.bun
    pkgs.nodejs_24
    pkgs.git
    pkgs.just
  ];

  languages.typescript.enable = true;
  languages.javascript.enable = true;

  enterShell = ''
    echo "🚀 Environnement SolidStart prêt"
    bun --version
  '';
}
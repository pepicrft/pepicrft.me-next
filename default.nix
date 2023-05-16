{ pkgs ? import <nixpkgs> {} }:

with pkgs;

let
  inherit (lib) optional optionals;
  elixir = beam.packages.erlangR25.elixir_1_14;
in
pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs-slim
    pkgs.nodePackages_latest.pnpm
  ];
}

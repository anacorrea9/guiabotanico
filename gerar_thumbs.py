"""
Gera versoes reduzidas das fotos para uso nos cards da galeria.
Le  fotos/*.jpg  e grava  fotos/thumbs/*.jpg  em ~800px (maior lado), qualidade 82.
Idempotente: pula arquivos cuja thumb ja esta atualizada.

Uso:  python gerar_thumbs.py
"""

import os
import sys
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).parent
FOTOS = ROOT / "fotos"
THUMBS = FOTOS / "thumbs"
MAX_SIDE = 800
QUALITY = 82

EXTS = {".jpg", ".jpeg", ".png", ".webp"}


def main():
    if not FOTOS.exists():
        print(f"[ERRO] pasta {FOTOS} nao encontrada")
        sys.exit(1)

    THUMBS.mkdir(exist_ok=True)

    feitos = 0
    pulados = 0
    erros = 0
    total_in = 0
    total_out = 0

    for src in sorted(FOTOS.iterdir()):
        if not src.is_file():
            continue
        if src.suffix.lower() not in EXTS:
            continue

        dst = THUMBS / src.name
        if src.suffix.lower() == ".png":
            dst = dst.with_suffix(".jpg")

        if dst.exists() and dst.stat().st_mtime >= src.stat().st_mtime:
            pulados += 1
            continue

        try:
            with Image.open(src) as im:
                im = ImageOps.exif_transpose(im)
                if im.mode != "RGB":
                    im = im.convert("RGB")
                im.thumbnail((MAX_SIDE, MAX_SIDE), Image.LANCZOS)
                im.save(dst, "JPEG", quality=QUALITY, optimize=True, progressive=True)
            total_in += src.stat().st_size
            total_out += dst.stat().st_size
            feitos += 1
            print(f"[OK] {src.name} -> {dst.name}  ({dst.stat().st_size/1024:.0f} KB)")
        except Exception as e:
            erros += 1
            print(f"[ERRO] {src.name}: {e}")

    print()
    print(f"Gerados: {feitos}   Pulados: {pulados}   Erros: {erros}")
    if feitos:
        print(f"Entrada (soma): {total_in/1024/1024:.1f} MB")
        print(f"Saida   (soma): {total_out/1024/1024:.1f} MB  ({total_out/total_in*100:.1f}% do original)")


if __name__ == "__main__":
    main()

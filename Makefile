N=[0m
V=[01;32m

all:
	@echo "Comandos disponibles:"
	@echo ""
	@echo "   $(V)blog    $(N) Actualiza la seccion noticias."
	@echo "   $(V)photos  $(N) Actualiza la seccion de fotos."
	@echo "   $(V)release $(N) Actualizando releases y descargas."
	@echo ""
	@echo "   $(V)iniciar $(N) Instala todas las dependencias."
	@echo "   $(V)preview $(N) Muestra el sitio de forma local."
	@echo "   $(V)deploy  $(N) Sube el sitio completo a la web."
	@echo ""
	
preview:
	ember serve

deploy:
	git add .
	git commit -m "actualizacion..."
	git push
	ember build --environment production
	cp -r -f dist/* ../ghpages__pilas-website-test/
	cd ../ghpages__pilas-website-test/; git add --all .; git commit -m "update"; git push origin gh-pages
	
	@echo ""
	@echo " * Subiendo los cambios a: http://hugoruscitti.github.io/pilas-website-test "
	@echo ""

iniciar:
	npm install
	bower install
	cd ../; git clone http://github.com/hugoruscitti/pilas-website-test.git ghpages__pilas-website-test; cd ghpages__pilas-website-test; git checkout gh-pages;


blog:
	@node extras/actualizar_blog.js

photos:
	@node extras/actualizar_photos.js

release:
	@python extras/obtener_links.py


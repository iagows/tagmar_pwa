help:  # This menu
	@clear
	@echo ""
	@echo '████████╗ █████╗  ██████╗ ███╗   ███╗ █████╗ ██████╗ '
	@echo '╚══██╔══╝██╔══██╗██╔════╝ ████╗ ████║██╔══██╗██╔══██╗'
	@echo '   ██║   ███████║██║  ███╗██╔████╔██║███████║██████╔╝'
	@echo '   ██║   ██╔══██║██║   ██║██║╚██╔╝██║██╔══██║██╔══██╗'
	@echo '   ██║   ██║  ██║╚██████╔╝██║ ╚═╝ ██║██║  ██║██║  ██║'
	@echo '   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝'
	@echo ""
	@cat $(MAKEFILE_LIST) | grep -e "^[a-zA-Z_\-]*: *.*"

start: # start the project
	@yarn dev

lighthouseLocal: # mostra qualidade pwa
	@npx lighthouse http://localhost:5173/tagmar_pwa --view

lighthouseRemoto: # mostra qualidade pwa
	@npx lighthouse https://iagows.github.io/tagmar_pwa --view

deploy: # envia para o github
	@yarn build
	@yarn deploy

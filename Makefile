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

deployMajor: # envia para o github
	@yarn buildMajor
	@yarn deploy

deployMinor: # envia para o github
	@yarn buildMinor
	@yarn deploy

deployPatch: # envia para o github
	@yarn buildPatch
	@yarn deploy

upgrade: # atualiza as libs
	@nvm use
	@yarn upgrade-interactive

CMD_CURL	:=	curl
CMD_MKDIR	:=	mkdir
CMD_RM		:=	rm
CMD_UNZIP	:=	unzip
CMD_CP		:=	cp
CMD_SCSS	:=	scss

DIR_THIS	:=	.
DIR_STATIC	:=	../static
DIR_TEMP	:=	temp


VER_BULMA	:=	0.7.4
PRE_BULMA	:=	bulma-$(VER_BULMA)
URL_BULMA	:=	https://github.com/jgthms/bulma/releases/download/$(VER_BULMA)/$(PRE_BULMA).zip
TMP_BULMA	:=	$(DIR_TEMP)/$(PRE_BULMA).zip
ZPT_BULMA	:=	$(PRE_BULMA)/bulma.sass
ZPT_BULMA_F	:=	$(PRE_BULMA)/sass
TGT_BULMA	:=	$(DIR_THIS)/bulma.sass

SRC_STYLE	:=	$(DIR_THIS)/bulmaswatch.scss
TGT_STYLE	:=	$(DIR_STATIC)/style.min.css


.PHONY: build
build: $(TGT_BULMA)
	$(CMD_SCSS) -t compressed $(SRC_STYLE) > $(TGT_STYLE)

.PHONY: bulma
bulma: $(TGT_BULMA)
$(TGT_BULMA):
	$(CMD_MKDIR) -v "$(DIR_TEMP)"
	$(CMD_CURL) -Lo "$(TMP_BULMA)" "$(URL_BULMA)"

	$(CMD_UNZIP) -d "$(DIR_TEMP)" "$(TMP_BULMA)" "$(ZPT_BULMA)"
	$(CMD_UNZIP) -d "$(DIR_TEMP)" "$(TMP_BULMA)" "$(ZPT_BULMA_F)/*"

	$(CMD_CP) -v "$(DIR_TEMP)/$(ZPT_BULMA)" "$(DIR_THIS)"
	$(CMD_CP) -av "$(DIR_TEMP)/$(ZPT_BULMA_F)" "$(DIR_THIS)"

	$(CMD_RM) -rvf $(DIR_TEMP)

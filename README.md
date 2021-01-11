# GraphsTemplateSite
Django template site for data visualisation

1. Docker:
- ./docker/init.sh <br/>
Jeżeli coś pójdzie nie tak to odpalanie bez dockera.
  
2. Bez dockera:
- ./.run/pyenv/init_db.sh <relatywna ścieżka do katalogu server>
- ./.run/pyenv/quick_run.sh <rel. śc. client> <rel. śc. server>

3. Jeżeli nie ma bibliotek na stacji to:
- ./.run/installer/install.sh
- ./.run/installer/run.sh

Ostatnia możliwość ściąga wszystkie potrzebne biblioteki i tworzy własny env.
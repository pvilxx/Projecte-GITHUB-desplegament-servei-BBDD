Activitat 10: Desenvolupament Col·laboratiu en un Projecte Node.js amb Git i GitHub
Objectiu:
Aquesta activitat té com a objectiu consolidar els coneixements de Git i GitHub mitjançant el desenvolupament d'un projecte de programari en equip. Continuarem el projecte anterior d'una agència de viatges, on ampliarem en grup, ampliant la web amb un sistema de registre d'usuaris, sol·licitud de pressupostos i gestió d'un catàleg de viatges.

A través d'aquest projecte, els alumnes aprendran a utilitzar branques, fusionar canvis, resoldre conflictes i aplicar un flux de treball col·laboratiu.

Descripció del projecte
Els alumnes han de desenvolupar una aplicació de viatges amb les següents funcionalitats:

Registre d'usuaris: Permetre als usuaris registrar-se al sistema.

Visualització de viatges disponibles: Mostrar els viatges oferts per l'agència.

Sol·licitud de pressupost: Permetre als usuaris sol·licitar un pressupost per un viatge seleccionat.

Connexió amb una base de dades: Emmagatzemar usuaris i viatges en una base de dades simple (SQLite, MySQL o MongoDB).

Estratègia de treball col·laboratiu amb GitHub
Els alumnes treballaran en grups de 3 o 4 persones. Cada grup assignarà un responsable de control del projecte i la resta dels membres assumiran funcions específiques. El procés de treball serà supervisat per aquest responsable i es controlaran les accions a través de les branques i les revisions de codi.

Per garantir que l’activitat es desenvolupi de manera adequada i que tots els membres del grup participin activament, el professor realitzarà un seguiment del procés mitjançant diverses eines i mètodes d’avaluació. Aquest control permetrà assegurar que es compleixin les normes establertes per al treball col·laboratiu amb Git i GitHub, així com identificar possibles dificultats durant el desenvolupament del projecte.

El professor accedirà regularment al repositori de cada grup per:

Analitzar la història de commits: Verificar qui ha fet cada commit i quan. Assegurar que els commits siguin freqüents i descriptius.  Detectar pujades massives de codi sense processos iteratius.

         Els commits han d'incloure descripcions clares (git commit -m "Resolució de ........ [nom de l’arxiu]").

Comprovar la gestió de branques: Revisar si cada funcionalitat s’ha desenvolupat en una branca separada. Verificar si s’han fet Pull Requests (PR) i si han estat revisats abans de ser fusionats. Identificar l’ús correcte de comandes com git merge, git rebase, i git stash.

Cada grup haurà de mantenir un fitxer de documentació (docs/assignacio_rols.md), on s’indiqui: Els noms dels membres del grup i els seus rols respectius. Les funcionalitats assignades a cadascú. La descripció de les branques creades i l’ús previst

Revisió de Resolució de Conflictes: Durant el desenvolupament del projecte, és probable que es generin conflictes en la fusió de codi. Es verificarà els conflictes i la seva resolució, sense eliminar funcionalitats d’altres companys. 

Autoavaluació i Revisió entre Iguals: Cada alumne haurà de revisar el treball d’un altre membre del grup i proporcionar feedback constructiu, el qual també serà revisat pel professor. Cada membre del grup (de forma individual) haurà d’omplir un document d’autoavaluació (docs/autoavaluacio_nomalumne.md), on indicarà les tasques realitzades versus al teu company,  dificultats trobades i com s’han resolt. Una valoració de l’aportació de cada membre del grup.

Aquest apartat serà part important de l'avaluació, s'indica al final com es puntuarà

Fases del projecte
1. Assignació de rols i planificació
Responsable de control del projecte: Aquest perfil és l'encarregat de gestionar el flux de treball del projecte, assignar tasques als altres membres i revisar l'ús de les branques i els commits. Aquest perfil és també el responsable de planificar les branques que es crearan i el procés de revisió de codi.

Membres del grup: Cada membre s'encarregarà d'una funcionalitat específica (per exemple, registre d'usuaris, llistat de viatges, etc.) i serà responsable de treballar en una branca separada.

2. Creació del repositori i estructuració de branques
Creació del repositori: El responsable de control crea el repositori a GitHub i afegeix els membres del grup com a col·laboradors.

Planificació de les branques: El responsable decideix les branques que s'han de crear per a cadascuna de les funcionalitats (per exemple, feature-registre, feature-viatges, feature-pressupost).

Exemple:

main: branca principal.

feature-registre: per la funcionalitat de registre d'usuaris.

feature-viatges: per la funcionalitat de visualització de viatges.

feature-pressupost: per la funcionalitat de sol·licitud de pressupostos.

Els membres creen les branques respectives i treballen en elles.

L'estructura del projecte ha de ser similar al següent, adaptant segons el grup i sol.litud de l'activitat
         

3. Desenvolupament de les funcionalitats
Desenvolupament en branques individuals: Cada membre desenvolupa la seva funcionalitat en una branca específica. Un cop acabada una funcionalitat, el membre ha de fer un commit amb un missatge descriptiu, per exemple:  git add . git commit -m "Afegit sistema de registre d'usuaris" git push origin feature-registre

Revisió de codi i Pull Requests (PRs):
Un cop un membre ha acabat una funcionalitat, crea un Pull Request (PR) per sol·licitar que els canvis es fusionin amb la branca principal (main). El responsable de control és el primer a revisar el PR i assigna a un altre membre per revisar-lo també. Aquesta revisió ha de comprovar que la funcionalitat estigui ben implementada i que el codi estigui net i segui les bones pràctiques.

Resolució de conflictes: Si apareixen conflictes en fer un merge (per exemple, si dues branques han modificat el mateix arxiu de manera incompatible), els membres implicats han de resoldre els conflictes manualment i coordinar-se per assegurar-se que el codi final sigui correcte.

El procés de resolució de conflictes seria el següent:

Comprovar quins arxius tenen conflictes.

Observar les parts del codi conflictiu i decidir quina versió és la correcta (o fusionar-les).

Un cop resolts els conflictes, fer un commit per registrar la solució del conflicte, per exemple: git add . git commit -m "Resolts conflictes en [nom arxiu]
4. Sincronització i gestió de branques remotes
Actualització de la branca principal:
Abans de treballar en la branca local, és important fer un git pull per actualitzar-se amb els canvis remots:

Treballar amb branques remotes:
Si un membre vol treballar en una branca existent, ha de fer un git fetch per descarregar les últimes actualitzacions de GitHub. Si ha fet canvis, haurà de fer un git push:

5. Revisió de la qualitat i control final
Estructura de les tasques: El responsable de control coordina les tasques i assigna les branques de treball, com també la creació de PRs per a la revisió.

Finalització del codi: Un cop totes les funcionalitats estan desenvolupades, el responsable fa una última revisió global i coordina la integració de totes les branques en la branca principal (main).

6. Avaluació entre pares
Avaluació de les tasques: Cada membre del grup avaluarà el treball dels altres membres basant-se en els següents criteris:

Qualitat del codi.

Contribució en el desenvolupament de les funcionalitats.

Participació en la resolució de conflictes.

Regularitat i qualitat dels commits.

Feedback i puntuació: Cada membre haurà de proporcionar una avaluació escrita sobre les tasques realitzades per cada membre del grup, destacant aspectes positius i àrees de millora. El responsable de control coordinarà la distribució de les avaluacions i assegurarà que tots els membres proporcionin el feedback de manera objectiva i constructiva.

Informe de grup: El grup haurà de lliurar un informe final en el qual es descriuen les tasques assignades, el procés de treball, les dificultats trobades, la resolució de conflictes, les contribucions de cada membre i la valoració general del projecte.

Criteris d’Avaluació
Per assegurar que tots els objectius d'aprenentatge es valorin correctament, es poden assignar percentatges a cadascun d'ells dins dels criteris d'avaluació establerts. Aquí tens una distribució detallada de com es poden avaluar els diferents objectius dins dels criteris generals:

Distribució de l’avaluació segons objectius d’aprenentatge
Objectiu	Criteri d'avaluació associat	Pes (%)
Ús de Git i GitHub en un entorn col·laboratiu	Ús correcte de Git i GitHub (commits, branques, PRs, gestió de conflictes)	30%
Desenvolupament d’una aplicació amb estructuració i bones pràctiques	Qualitat del codi i estructura del projecte	25%
Treball col·laboratiu i revisió de codi entre companys	Col·laboració i treball en equip (participació activa, revisió de codi)	20%
Gestió i resolució de conflictes en el codi	Resolució de conflictes	15%
Capacitat de documentar processos i autoavaluar-se	Documentació i autoavaluació (assignació de rols, feedback, informes)	10%
Desglossament per objectius específics
Dominar Git i GitHub per al treball col·laboratiu (30%)

Verificació de l’ús correcte de commits (freqüència, claredat, coherència).

Revisió de la correcta gestió de branques i ús de Pull Requests.

Comprovació del flux de treball col·laboratiu a GitHub (historial de commits, PRs revisats i aprovats).

Mètode d’avaluació: Revisió del repositori per part del professor.

Desenvolupar un projecte Node.js amb una estructura clara i codi net (25%)

Qualitat del codi (neteja, modularitat, bones pràctiques).

Estructura del projecte (organització de carpetes i fitxers).

Compliment de bones pràctiques en programació (nomenclatura, comentaris).

Mètode d’avaluació: Revisió del codi per part del professor + revisió entre iguals.

Fomentar la col·laboració i la revisió entre iguals (20%)

Nivell d’interacció entre membres del grup (revisions de codi, comentaris en PRs).

Capacitat de donar i rebre feedback constructiu.

Coordinació i comunicació dins del grup.

Mètode d’avaluació: Feedback entre alumnes + observació del professor.

Gestionar i resoldre conflictes de codi en GitHub (15%)

Detecció i resolució de conflictes sense eliminar funcionalitats d’altres companys.

Registre de conflictes resolts correctament (commits específics).

Mètode d’avaluació: Anàlisi del repositori i feedback dels companys.

Documentar correctament el procés i reflexionar sobre l’aprenentatge (10%)

Compleció dels fitxers de documentació del projecte.

Reflexió sobre les pròpies contribucions (autoavaluació).

Valoració de les aportacions dels companys (avaluació entre iguals).

Mètode d’avaluació: Entrega de la documentació + revisió del professor.

Equilibri entre l'avaluació del professor i la valoració entre alumnes
70% avaluació del professor (qualitat tècnica, estructura del codi, ús de Git, resolució de conflictes).

30% revisió entre iguals (qualitat de la col·laboració, feedback donat i rebut).

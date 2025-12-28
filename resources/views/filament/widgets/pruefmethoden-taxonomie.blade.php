<x-filament-widgets::widget>
    <x-filament::section collapsible collapsed>
        <x-slot name="heading">Taxonomie der Prüfmethoden</x-slot>
        <x-slot name="description">
            Zur besseren Einordnung sind die Methoden nach mehreren Merkmalen kategorisiert.
        </x-slot>
        <div>
            <p><b>Task:</b> Für welche Arten von KI-Aufgaben sich die Methode eignet.</p>
            <p style='margin-top:1em;'>

                <x-filament::button style="margin:2px;" outlined size="sm" icon="carbon-bland-altman-plot"
                    href="/methods?filters[Task][values][0]=3" label="Regression" color="black"
                    tag="a">Regression</x-filament::button>
                <x-filament::button style="margin:2px;" outlined size="sm" icon="carbon-support-vector-machine"
                    href="/methods?filters[Task][values][0]=1" label="Klassifizierung" color="black"
                    tag="a">Klassifizierung</x-filament::button>
                <x-filament::button style="margin:2px;" outlined size="sm" icon="carbon-chart-t-sne"
                    href="/methods?filters[Task][values][0]=6" label="Clustering" color="black"
                    tag="a">Clustering</x-filament::button>
                <x-filament::button style="margin:2px;" outlined size="sm" icon="carbon-cognitive"
                    href="/methods?filters[Task][values][0]=7" label="Generative KI" color="black"
                    tag="a">Generative KI</x-filament::button>
                <x-filament::button style="margin:2px;" outlined size="sm" icon="carbon-circle-packing"
                    href="/methods?filters[Task][values][0]=5" label="Segmentierung" color="black"
                    tag="a">Segmentierung</x-filament::button>
                <x-filament::button style="margin:2px;" outlined size="sm" icon="phosphor-asterisk-bold"
                    href="/methods?filters[Task][values][0]=2" label="Agnostisch" color="black"
                    tag="a">Agnostisch</x-filament::button>
            </p>

            <p style="margin-top:2em"><b>Tiefe:</b> Ob es sich um eine Basis- oder fortgeschrittene Methode mit
                entsprechendem Analyseaufwand handelt.</p>
            <p style='margin-top:1em;'>

                <x-filament::button style="margin:2px;" outlined size="sm" icon="carbon-certificate-check"
                    href="/methods?filters[Tiefe][values][0]=1" label="Basismethode" color="black"
                    tag="a">Basismethode</x-filament::button>
                <x-filament::button style="margin:2px;" outlined size="sm" icon="carbon-certificate"
                    href="/methods?filters[Tiefe][values][0]=2" label="Fortgeschrittene Methode" color="black"
                    tag="a">Fortgeschrittene Methode</x-filament::button>

            </p>

            <p style="margin-top:2em"><b>Ergebnis:</b> Wie leicht die Ergebnisse verständlich oder
                weiterverarbeitbar sind (z. B. einfache Kennzahlen vs. komplexe Visualisierungen).</p>
            <p style='margin-top:1em;'>

                <x-filament::button style="margin:2px;" outlined size="sm" icon="carbon-character-whole-number"
                    href="/methods?filters[Ergebnis][values][0]=1" label="einzelne/mehrere reelle Zahlen" color="black"
                    tag="a">Einzelne/mehrere reelle Zahlen</x-filament::button>
                <x-filament::button style="margin:2px;" outlined size="sm" icon="carbon-data-categorical"
                    href="/methods?filters[Ergebnis][values][0]=2" label="komplexe Ergebnisse" color="black"
                    tag="a">Komplexe Ergebnisse</x-filament::button>

            </p>

            <p style="margin-top:2em"><b>Automatisierbar:</b> Ob sich die Methode in automatisierte
                Prüfprozesse integrieren lässt.</p>
            <p style='margin-top:1em;'>

                <x-filament::button style="margin:2px;" outlined size="sm" icon="carbon-automatic"
                    href="/methods?filters[Automatisierbar][values][0]=1" label="einzelne/mehrere reelle Zahlen"
                    color="black" tag="a">Ja</x-filament::button>
                <x-filament::button style="margin:2px;" outlined size="sm" icon="heroicon-o-no-symbol"
                    href="/methods?filters[Automatisierbar][values][0]=3" label="komplexe Ergebnisse" color="black"
                    tag="a">Nein</x-filament::button>
                <x-filament::button style="margin:2px;" outlined size="sm" icon="heroicon-o-question-mark-circle"
                    href="/methods?filters[Automatisierbar][values][0]=2" label="komplexe Ergebnisse" color="black"
                    tag="a">Wahrscheinlich</x-filament::button>

            </p>

            <p style="margin-top:2em; color:gray">Weitere Kategorien werden in der Detailansicht angezeigt.</p>

            <!--
            <p style="margin-bottom:0.5em"><b>Datenanforderungen:</b> Welche Eingaben (z. B. Ground Truth, Trainings- oder Testdaten) für die Anwendung der Methode benötigt werden.</p>
            <p style="margin-bottom:0.5em"><b>Modellzugriff:</b> Welche Zugriffsrechte erforderlich sind – von rein beobachtenden Tests bis hin zu vollständigem Zugriff auf Modellparameter.</p>
            -->

            <p style="margin-top:2em; text-align:right;"><a href="/entries/1"
                    style="
                color: oklch(0.141 0.005 285.823);
                font-weight: 600;
                text-underline-offset: 3px;
                text-decoration: underline;
                text-decoration-color: oklch(0.141 0.005 285.823);
                text-decoration-thickness: auto;
                -webkit-text-decoration-color: oklch(0.141 0.005 285.823);
                -webkit-text-decoration-color: oklch(0.141 0.005 285.823);
                text-decoration-color: oklch(0.141 0.005 285.823);
                text-decoration-thickness: 1px;            
            ">Weitere
                    Informationen</a></p>
        </div>
    </x-filament::section>
</x-filament-widgets::widget>

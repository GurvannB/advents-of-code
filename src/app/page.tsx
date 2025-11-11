'use client';

import React, {useMemo, useState} from "react";
import {daysFor, registry, years} from "@/core/registry";
import Controls from "@components/controls";
import Result from "@components/result";

export default function App() {
    const [year, setYear] = useState<string>(years[years.length - 1] ?? "");
    const [day, setDay] = useState<string>(daysFor(year)[daysFor(year).length - 1] ?? "");
    const [input, setInput] = useState<string>("");
    const [res1, setRes1] = useState<string | number>();
    const [res2, setRes2] = useState<string | number>();
    const [error, setError] = useState<string>();

    const availableDays = useMemo(() => daysFor(year), [year]);
    React.useEffect(() => {
        if (!availableDays.includes(day)) setDay(availableDays[0] ?? "");
    }, [year, availableDays, day]);

    const solver = registry[year]?.[day];
    const title = solver?.name
        ? `${year} — ${day.toUpperCase()} — ${solver.name}`
        : `${year} — ${day.toUpperCase()}`;

    function run() {
        setError(undefined);
        if (!solver) {
            setError("Aucune solution disponible.");
            return;
        }
        setRes1(solver.part1(input));
        setRes2(solver.part2(input));
        setError("");
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100">
            <div className="container mx-auto max-w-5xl p-8 space-y-8">
                <header className="flex items-center justify-between border-b border-slate-700 pb-4">
                    <h1 className="text-2xl font-bold tracking-wide">🎄 Advents of Code</h1>
                    <span className="text-sm text-slate-400">
            Gurvann BRENNE
          </span>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Controls
                        years={years}
                        selectedYear={year}
                        onYear={setYear}
                        days={availableDays}
                        selectedDay={day}
                        onDay={setDay}
                        input={input}
                        onInput={setInput}
                        onRun={run}
                    />
                    <Result
                        title={title}
                        part1={res1}
                        part2={res2}
                        error={error}
                        notes={solver?.notes}
                    />
                </div>
            </div>
        </div>
    );
}


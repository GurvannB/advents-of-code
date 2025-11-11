import React from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";

type Props = {
    years: string[];
    selectedYear: string;
    onYear: (y: string) => void;
    days: string[];
    selectedDay: string;
    onDay: (d: string) => void;
    input: string;
    onInput: (v: string) => void;
    onRun: () => void;
};

export default function Controls({
                                     years, selectedYear, onYear, days, selectedDay, onDay, input, onInput, onRun
                                 }: Props) {
    return (
        <Card className="bg-slate-800 border-slate-700 shadow-lg">
            <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-100">⚙️ Contrôles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
                <div className="flex gap-4">
                    <div className="flex flex-col gap-1">
                        <Label className="text-slate-300">Année</Label>
                        <Select value={selectedYear} onValueChange={onYear}>
                            <SelectTrigger className="bg-slate-900 border-slate-700 text-slate-100">
                                <SelectValue placeholder="Année"/>
                            </SelectTrigger>
                            <SelectContent>
                                {years.map(y => <SelectItem key={y} value={y}>{y}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label className="text-slate-300">Jour</Label>
                        <Select value={selectedDay} onValueChange={onDay}>
                            <SelectTrigger className="bg-slate-900 border-slate-700 text-slate-100">
                                <SelectValue placeholder="Jour"/>
                            </SelectTrigger>
                            <SelectContent>
                                {days.map(d => <SelectItem key={d} value={d}>{d.toUpperCase()}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <Label className="text-slate-300">Input</Label>
                    <Textarea
                        className="bg-slate-900 border-slate-700 text-slate-100 font-mono text-xs resize-none h-40 max-h-60 overflow-y-auto"
                        placeholder="Colle l'input du puzzle..."
                        value={input}
                        onChange={e => onInput(e.target.value)}
                    />
                </div>

                <div className="flex gap-3">
                    <Button
                        variant="secondary"
                        className="bg-slate-700 hover:bg-slate-600"
                        onClick={() => navigator.clipboard.readText().then(onInput).catch(() => {
                        })}
                    >
                        Coller
                    </Button>
                    <Button
                        className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold"
                        onClick={onRun}
                    >
                        Valider
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

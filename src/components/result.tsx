import React from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";

type Props = {
    title: string;
    part1?: string | number;
    part2?: string | number;
    error?: string;
    notes?: string;
};

export default function Result({title, part1, part2, error, notes}: Props) {
    return (
        <Card className="bg-slate-800 border-slate-700 shadow-lg">
            <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-100">Résultats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <h3 className="text-sm font-medium text-slate-200">{title}</h3>
                {notes && <p className="text-xs text-slate-400">{notes}</p>}

                {error ? (
                    <Alert variant="destructive" className="border-red-600 bg-red-950 text-red-200">
                        <AlertTitle>Erreur</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                ) : (
                    <div className="grid grid-cols-2 gap-4">
                        <Card className="bg-slate-900 border-slate-700">
                            <CardHeader><CardTitle className="text-slate-300">Partie 1</CardTitle></CardHeader>
                            <CardContent className="text-lg font-bold text-emerald-400">{part1 ?? ""}</CardContent>
                        </Card>
                        <Card className="bg-slate-900 border-slate-700">
                            <CardHeader><CardTitle className="text-slate-300">Partie 2</CardTitle></CardHeader>
                            <CardContent className="text-lg font-bold text-sky-400">{part2 ?? ""}</CardContent>
                        </Card>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

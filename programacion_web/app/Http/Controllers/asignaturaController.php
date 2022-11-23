<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\asignaturaModel;

class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $asignatura = asignaturaModel::all();
        return $asignatura;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $asignatura = new asignaturaModel();
        $asignatura->nombre = $request->nombre;
        $asignatura->cantidad_creditos = $request->cantidad_creditos;
        $asignatura->intensiidad_horaria = $request->intensiidad_horaria;
        $asignatura->carrera = $request->carrera;
        $asignatura->save();

        $asignaturas= asignaturaModel::all();
        return $asignaturas;


        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $asignatura = asignaturaModel::find($id);
        return $asignatura;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $asignatura = asignaturaModel::find($id);
        $asignatura->nombre = $request->nombre;
        $asignatura->cantidad_creditos = $request->cantidad_creditos;
        $asignatura->intensiidad_horaria = $request->intensiidad_horaria;
        $asignatura->carrera = $request->carrera;
        $asignatura->save();
        
        $asignaturas= asignaturaModel::all();
        return $asignaturas;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $asignatura = asignaturaModel::find($id);
        $asignatura->delete();
    }
}

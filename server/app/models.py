from werkzeug.security import generate_password_hash, check_password_hash
from mongoengine import Document, EmbeddedDocument
from mongoengine import StringField, IntField, ListField, BooleanField, DateField, EmbeddedDocumentListField, EmbeddedDocumentField, ReferenceField
from flask_login import UserMixin
from datetime import datetime

from . import login


class User(UserMixin, Document):
    meta = {"collection": "usuario"}

    username = StringField(required=True, db_field="usuario")
    user_name = StringField(required=True, db_field="nombre")
    user_paternal_last_name = StringField(
        required=False, db_field="apellido_paterno")
    user_maternal_last_name = StringField(
        required=False, db_field="apellido_materno")
    password = StringField(required=True, db_field="contrasena")
    type = IntField(required=True, db="tipo")

    def __str__(self):
        return "User {}".format(self.username)

    def __repr__(self):
        return self.__str__()

    @staticmethod
    def create_new_user(username, user_name, user_paternal_last_name, user_maternal_last_name, password, type):
        return User(username=username, user_name=user_name, user_paternal_last_name=user_paternal_last_name, user_maternal_last_name=user_maternal_last_name, password=generate_password_hash(password), type=type)


@login.user_loader
def load_user(id):
    return User.objects(id=id).first()


class FamilyStructure(EmbeddedDocument):
    family_member_name = StringField(required=True, db_field="nombre_familiar")
    family_member_age = StringField(required=True, db_field="edad_familiar")
    family_member_relationship = StringField(required=True, db_field="parentesco_familiar")
    family_member_civil_state = StringField(required=True, db_field="estado_civil_familiar")
    family_member_ocupation = StringField(required=True, db_field="ocupacion_familiar")
    family_member_income = StringField(required=True, db_field="ingreso_familiar")


class Address(EmbeddedDocument):
    street = StringField(required=True, db_field="calle")
    num = IntField(required=True, db_field="num")
    suburb = StringField(required=True, db_field="colonia")
    locality = StringField(required=True, db_field="localidad")
    municipality = StringField(required=True, db_field="muicipio")
    zip_code = IntField(required=True, db_field="cp")
    phone = IntField(required=True, db_field="tel")
    phone2 = IntField(required=False, db_field="tel2")


class ResponsableFamilyMember(EmbeddedDocument):
    responsable_name = StringField(required=True, db_field="nombre_responsable")
    responsable_address = EmbeddedDocumentField(Address, db_field="direccion_responsable")
    responsable_relationship = StringField(required=True, db_field="parentesco_responsable")


class Diet(EmbeddedDocument):
    red_meat = StringField(required=True, db_field="carnes_rojas")
    chicken = StringField(required=True, db_field="pollo")
    fish = StringField(required=True, db_field="pescado")
    grain = StringField(required=True, db_field="grano")
    dairy = StringField(required=True, db_field="lacteos")
    bread_pasta = StringField(required=True, db_field="pan_pasta")
    fruit_vegtables = StringField(required=True, db_field="frutas_verduras")


class LivingPlace(EmbeddedDocument):
    place_type = StringField(required=True, db_field="tipo_vivienda")
    place_services = StringField(required=True, db_field="servicios_vivienda")
    place_material = StringField(required=True, db_field="material_vivienda")
    place_distribution = ListField(StringField(), required=True, db_field="distribucion_vivienda")
    place_person_per_room = StringField(required=True, db_field="personas_por_cuarto_vivienda")
    place_location = StringField(required=True, db_field="zona_vivienda")


class HouseholdGoods(EmbeddedDocument):
    electrodomestics = StringField(required=True, db_field="electrodomesticos")
    air_conditioner = StringField(required=True, db_field="refrigeracion")
    trnasportation = StringField(required=True, db_field="transporte")
    car_brand = StringField(required=False, db_field="marca_auto")
    car_model = StringField(required=False, db_field="modelo_auto")


class Outcome(EmbeddedDocument):
    outcome_electric_power = IntField(required=True, db_field="energia_electrica_egreso")
    outcome_water = IntField(required=True, db_field="agua_egreso")
    outcome_gas = IntField(required=True, db_field="gas_egreso")
    outcome_phone = IntField(required=True, db_field="telefono_egreso")
    outcome_food = IntField(required=True, db_field="alimentos_egreso")
    outcome_rent = IntField(required=True, db_field="renta_egreso")
    outcome_transportation = IntField(required=True, db_field="transporte_egreso")
    outcome_education = IntField(required=True, db_field="educacion_egreso")
    outcome_clothing = IntField(required=True, db_field="vestimenta_egreso")
    outcome_recreational = IntField(required=True, db_field="diversion_egreso")
    outcome_other = IntField(required=True, db_field="otros_egreso")


class SubstanceAbuse(EmbeddedDocument):
    household_member_substance = StringField(required=True, db_field="consume_miembro_vivienda")
    substance_consumed = StringField(required=False, db_field="sustancia_consumida")
    consuming_member = StringField(required=False,  db_field="miembro_consumidor")
    consuming_frequency = StringField(required=False, db_field="frecuencia_consumo")

class SocioeconomicForm(Document):
    meta = {"collection": "formato_socioeconomico"}

    date_modified = DateField(default=datetime.utcnow, db_field="ultima_modificacion")
    record_num = IntField(required=True, unique=True, db_field="num_expediente")
    chemotherapy = BooleanField(required=True, db_field="quimioterapia")
    hostel = BooleanField(required=True, db_field="albergue")
    admission_date = DateField(required=True, db_field="fecha_ingreso")
    discharge_date = DateField(required=True, db_field="fecha_egreso")
    ##General data
    name = StringField(required=True, db_field="nombre")
    age = IntField(required=True, db_field="edad")
    sex = StringField(required=True, db_field="sexo")
    civil_state = StringField(required=True, db_field="estado_civil")
    birth_date = DateField(required=True, db_field="fecha_naciemiento")
    birth_place = StringField(required=True, db_field="lugar_nacimiento")
    scholarship = StringField(required=True, db_field="escolaridad")
    religion = StringField(required=True, db_field="religion")
    ocupation = StringField(required=True, db_field="ocupacion")
    income = IntField(required=False, db_field="ingreso")
    ######????Servicio Medico????
    ######????DX Medico????
    ##Temporal address
    temp_address = EmbeddedDocumentField(Address, required=True, db_field="direccion_temporal")
    ##Responsable
    responsable_family_member = EmbeddedDocumentField(ResponsableFamilyMember, required=True, db_field="familiar_responsable")
    ##Family Structure
    family_structure = EmbeddedDocumentListField(FamilyStructure, required=False, db_field="estructura_familiar")
    ##Diet
    diet = EmbeddedDocumentField(Diet, required=True, db_field="dieta")
    ##Living place
    living_place = EmbeddedDocumentField(LivingPlace, required=True, db_field="vivienda")
    ##Family sick members
    sick_members = StringField(required=True, db_field="familiares_enfermos")
    ##Household goods
    household_goods = EmbeddedDocumentField(HouseholdGoods, required=True, db_field="bienes_hogar")
    ##geographic area
    geographic_area = StringField(required=True, db_field="area_geografica")
    ##Outcome
    outcome = EmbeddedDocumentField(Outcome, required=True, db_field="egresos")
    ##Substance abuse
    substance_abuse = EmbeddedDocumentField(SubstanceAbuse, required=True, db_field="consume_sustancias_toxicas")
    ##AGP questions
    heard_from_us = StringField(required=True, db_field="conocio_agrupacion")
    past_help = StringField(required=True, db_field="apoyo_anterior")
    help_type = StringField(required=False, db_field="tipo_apoyo")
    observations = StringField(required=False, db_field="observaciones")
    social_plan =StringField(required=True, db_field="plan_social")
    socioeconomic_classification1 = StringField(required=True, db_field="clasificacion_socioeconomica1")
    socioeconomic_classification2 = StringField(required=True, db_field="clasificacion_socioeconomica2")
    socioeconomic_classification3 = StringField(required=True, db_field="clasificacion_socioeconomica3")
    social_worker = StringField(required=True, db_field="trabajador_social")
    
    def __str__(self):
        return f"SocioeconomicForm({self.record_num})"

    def __repr__(self):
        return self.__str__()

##Embedded documents for medical form
class EmergencyContact(EmbeddedDocument):
    emergency_name = StringField(required=True, db_field="emergencia_nombre")
    emergency_phone = IntField(required=True, db_field="emergencia_tel")
    emergency_relationship = StringField(required=True, db_field="emergencia_parentesco")
class FamilyHistory(EmbeddedDocument):
    relationship = StringField(required=True, db_field="parentesco")
    living = BooleanField(required=True, db_field="vive")
    diseases = ListField(StringField(), required=False, db_field="enfermedades")
    cause_of_death = StringField(required=False, db_field="causa_defuncion")
class LivingPlaceMedical(EmbeddedDocument):
    place_type = StringField(required=True, db_field="tipo_vivienda")
    place_material = StringField(required=True, db_field="material_vivienda")
    place_inhabitants = IntField(required=True, db_field="habitantes_vivienda")
    place_rooms = IntField(required=True, db_field="habitaciones_vivienda")
    place_hazards = StringField(required=False, db_field="exposicion_biomasas_vivienda")
class DietMedical(EmbeddedDocument):
    quality_perception = StringField(required=True, db_field="percepcion_calidad")
    meals_day = IntField(required=True, db_field="comidas_dia")
    ## Preparacion alimentos????
    water_quantity = IntField(required=True, db_field="cantidad_agua") ##Int???
class Hygiene(EmbeddedDocument):
    showers_week = IntField(required=True, db_field="baños_semana")
    teeth_brushing_day = IntField(required=True, db_field="lavar_dientes_dia")
    ## Higiene del hogar????
class Animals(EmbeddedDocument):
    vaccinated = BooleanField(required=True, db_field="vacunados")
    ticks = BooleanField(required=True, db_field="garrapatas")
    diseases = ListField(StringField(), required=False, db_field="enfermedades")
    ## Higiene del hogar????
class NonPathological(EmbeddedDocument):
    living_place = EmbeddedDocumentField(LivingPlaceMedical, required=True, db_field="vivienda")
    diet = EmbeddedDocumentField(DietMedical, required=True, db_field="alimentacion")
    hygiene = EmbeddedDocumentField(Hygiene, required=True, db_field="higiene")
    ## actividad fisica ??
    ## pasatiempo??
    animals = EmbeddedDocumentField(Animals, required=True, db_field="animales")
    ## cartilla vacunacion ??
class ChronicDegenerativeDisease(EmbeddedDocument):
    disease_name = StringField(required=True, db_field="nombre_enfermedad")
    time_since_diagnosis = IntField(required=True, db_field="tiempo_desde_diagnostico") ##Int???
    treatment = StringField(required=True, db_field="tratamiento")
    complications = StringField(required=True, db_field="complicaciones")
    adherance_treatment = StringField(required=True, db_field="apego_tratamiento")
class DrugUse(EmbeddedDocument):
    starting_age = IntField(required=True, db_field="edad_inicio")
    quantity = IntField(required=True, db_field="cantidad")
    frequency = StringField(required=True, db_field="frecuencia")
class MaleSexualHealth(EmbeddedDocument):
    start_sexual_life = IntField(required=False, db_field="inicio_vida_sexual")
    sexual_partners = IntField(required=False, db_field="parejas_sexuales")
    std = ListField(StringField(), required=False, db_field="ets")
    contraceptive_methos = ListField(StringField(), required=False, db_field="metodos_anticonceptivos")
class CancerTest(EmbeddedDocument):
    date = DateField(required=True, db_field="fecha")
    result = BooleanField(required=True, db_field="resultado")
class FemaleSexualHealth(EmbeddedDocument):
    menarche = DateField(required=False, db_field="menarca")
    ## ritmo ??
    start_sexual_life = IntField(required=False, db_field="inicio_vida_sexual")
    high_risk_partners = IntField(required=False, db_field="parejas_alto_riesgo")
    sexual_partners = IntField(required=False, db_field="parejas_sexuales")
    std = ListField(StringField(), required=False, db_field="ets")
    gestations = IntField(required=False, db_field="gestas")
    deliveries = IntField(required=False, db_field="partos")
    abortions = IntField(required=False, db_field="abortos")
    date_last_delivery = DateField(required=False, db_field="fecha_ultimo_parto")
    age_first_pregnancy = IntField(required=False, db_field="edad_primer_embarazo")
    family_planning_methods = ListField(StringField(), required=False, db_field="metodos_planificacion_familiar")
    date_last_menstruation = DateField(required=False, db_field="fecha_ultima_regla")
    ## Menopausia ??
    breastfeeding = BooleanField(required=True, db_field="lactancia_materna")
    last_pap_smear = EmbeddedDocumentField(CancerTest, required=False, db_field="ultimo_papanicolaou")
    last_hybrid_test = EmbeddedDocumentField(CancerTest, required=False, db_field="ultima_prueba_hibridos")
    last_mammography = EmbeddedDocumentField(CancerTest, required=False, db_field="ultima_mamografia")
class Pathological(EmbeddedDocument):
    chronic_degenerative_diseases = EmbeddedDocumentListField(FamilyHistory, required=False, db_field="enfermedades_cronicodegenerativas")
    infectious_contagious_diseases = ListField(StringField(), required=False, db_field="enfermedades_infectocontagiosas")
    surgeries = ListField(StringField(), required=False, db_field="cirugias")
    jail = BooleanField(required=True, db_field="carcel")
    blood_transfusions = BooleanField(required=True, db_field="transfusiones_sanguineas") ## Bool ??
    allergies = ListField(StringField(), required=False, db_field="alergias")
    trauma = ListField(StringField(), required=False, db_field="traumatismos")
    alcoholism = EmbeddedDocumentField(DrugUse, required=False, db_field="alcoholismo")
    smoking = EmbeddedDocumentField(DrugUse, required=False, db_field="tabaquismo")
    drug_addictions = EmbeddedDocumentField(DrugUse, required=False, db_field="toxicomanias")
    ## Generic Embedded Document !!
    ##sexual_health = EmbeddedDocumentField(required=True, db_field="salud_sexual")
class Skin(EmbeddedDocument):
    color_changes = ListField(StringField(), required=False, db_field="cambios_coloracion")
    other_changes = ListField(StringField(), required=False, db_field="otros_cambios")
class OphthalmicSystem(EmbeddedDocument):
    vision_changes = ListField(StringField(), required=False, db_field="cambios_vision")
    uses_glasses = BooleanField(required=True, db_field="usa_lentes")
    reason_glasses = StringField(required=False, db_field="razon_lentes")
class EntSystem(EmbeddedDocument):
    hearing_changes = ListField(StringField(), required=False, db_field="cambios_audicion")
    ear_pain = BooleanField(required=True, db_field="dolor_oido")
    vertigo = BooleanField(required=True, db_field="vertigo")
    fluid_leaking_ear = BooleanField(required=True, db_field="salida_liquido_oido")
    smelling_changes = BooleanField(required=True, db_field="cambios_olfato")
    fluid_leaking_nose = BooleanField(required=True, db_field="salida_liquido_nariz")
    nose_pain = BooleanField(required=True, db_field="dolor_nariz")
    teeth_conditions = ListField(StringField(), required=False, db_field="condiciones_dientes")
    gum_conditions = ListField(StringField(), required=False, db_field="condiciones_encias")
    gum_conditions = ListField(StringField(), required=False, db_field="condiciones_encias")
    tongue_conditions = ListField(StringField(), required=False, db_field="condiciones_lengua")
    speaking_problems = StringField(required=False, db_field="problemas_hablar")
    thirst = BooleanField(required=True, db_field="sed")
    speaking_eating_pain = BooleanField(required=True, db_field="dolor_comer_hablar")
    bad_breath = BooleanField(required=True, db_field="mal_aliento")
    excess_salivation = BooleanField(required=True, db_field="exceso_salivacion")
class DigestiveSystem(EmbeddedDocument):
    esophagus_conditions = ListField(StringField(), required=False, db_field="condiciones_esofago")
    stomache_conditions = ListField(StringField(), required=False, db_field="condiciones_estomago")
    evacuation_changes = ListField(StringField(), required=False, db_field="cambios_evacuaciones")
    liver_bile_conditions = ListField(StringField(), required=False, db_field="condiciones_higado_biliares")
    pancreas_conditions = ListField(StringField(), required=False, db_field="condiciones_pancreas")
class RespiratoryApparatus(EmbeddedDocument):
    breathing_conditions = ListField(StringField(), required=False, db_field="condiciones_respiratorias")
    fatigue = BooleanField(required=True, db_field="fatiga")
    breathing_problems = BooleanField(required=True, db_field="problemas_respirar")
    breathing_changes = BooleanField(required=True, db_field="cambios_respiracion")
class CardiovascularApparatus(EmbeddedDocument):
    dyspnoea = BooleanField(required=True, db_field="disnea")
    orthopnea = BooleanField(required=True, db_field="ortopnea")
    number_pillows = IntField(required=True, db_field="numero_almohadas")
    lipothymia = BooleanField(required=True, db_field="lipotimia")
    syncope = BooleanField(required=True, db_field="sincope")
    edema = BooleanField(required=True, db_field="edema")
    cyanosis = BooleanField(required=True, db_field="cianosis")
    chest_pain = BooleanField(required=True, db_field="color_toracico")
    palpitations = BooleanField(required=True, db_field="palpitaciones")
    caludication = BooleanField(required=True, db_field="claudicacion")
class GenitourinarySystem(EmbeddedDocument):
    urinating_changes = ListField(StringField(), required=False, db_field="cambios_miccionar")
    urinating_pain = BooleanField(required=True, db_field="dolor_miccionar")
    jet_changes = ListField(StringField(), required=False, db_field="cambios_chorro")
    menstruation_changes = ListField(StringField(), required=False, db_field="cambios_menstruacion")
    dyspareunia = BooleanField(required=True, db_field="dispareunia")
    libido_changes = BooleanField(required=True, db_field="cambios_libido")
class MusculoskeletalSystem(EmbeddedDocument):
    muscle_pain = BooleanField(required=True, db_field="dolor_muscular")
    joint_pain = BooleanField(required=True, db_field="dolor_articular")
    joint_stiffness = BooleanField(required=True, db_field="rigidez_articular")
    nodules = BooleanField(required=True, db_field="nodulos")
    bone_pain = BooleanField(required=True, db_field="dolor_osea")
    ambulation_changes = ListField(StringField(), required=False, db_field="cambios_deambulacion")
class HematologicalSystem(EmbeddedDocument):
    weakness = BooleanField(required=True, db_field="debilidad")
    color_changes = ListField(StringField(), required=False, db_field="cambios_coloracion")
    hematological_conditions = ListField(StringField(), required=False, db_field="condiciones_hematologicas")
    lymphadenopathy  = BooleanField(required=True, db_field="adenopatias")
class NervousSystem(EmbeddedDocument):
    headache = BooleanField(required=True, db_field="cefalea")
    seizures = BooleanField(required=True, db_field="convulciones")
    memory_changes = ListField(StringField(), required=False, db_field="cambios_memoria")
    sphincters_changes = ListField(StringField(), required=False, db_field="cambios_esfinteres")
    loss_of_feeling = BooleanField(required=True, db_field="perdida_sensacion")
    loss_of_movement = BooleanField(required=True, db_field="perdida_movimiento")
    loss_of_balance = BooleanField(required=True, db_field="perdida_equilibrio")
    language_disorders = ListField(StringField(), required=False, db_field="trastornos_lenguaje")
    gait_changes = ListField(StringField(), required=False, db_field="cambios_marcha")
    tremors = BooleanField(required=True, db_field="temblores")
    paralysis = BooleanField(required=True, db_field="paralisis")
    parasthesia = BooleanField(required=True, db_field="parestesias")
    paresis = BooleanField(required=True, db_field="paresias")
class PsychicSystem(EmbeddedDocument):
    distress = BooleanField(required=True, db_field="angustia")
    depression = BooleanField(required=True, db_field="depresion")
    interest_changes = BooleanField(required=True, db_field="cambios_interes")
    guilt = BooleanField(required=True, db_field="culpa")
    suicidal_thoughts = BooleanField(required=True, db_field="ideas_suicidas")
    hallucinations = BooleanField(required=True, db_field="alucinaciones")
    delirium = BooleanField(required=True, db_field="delirio")
class ApparatusAndSystems(EmbeddedDocument):
    skin = EmbeddedDocumentField(Skin, required=False, db_field="piel")
    ophthalmic_system = EmbeddedDocumentField(OphthalmicSystem, required=False, db_field="sistema_oftalmologico")
    ent_system = EmbeddedDocumentField(OphthalmicSystem, required=True, db_field="sistema_otorrinolaringologico")
    digestive_system = EmbeddedDocumentField(DigestiveSystem, required=True, db_field="sistema_digestivo")
    respiratory_apparatus = EmbeddedDocumentField(RespiratoryApparatus, required=True, db_field="aparato_respiratorio")
    cardiovascular_apparatus = EmbeddedDocumentField(CardiovascularApparatus, required=True, db_field="aparato_cardiovascular")
    genitourinary_system = EmbeddedDocumentField(GenitourinarySystem, required=True, db_field="sistema_genitourinario")
    musculoskeletal_system = EmbeddedDocumentField(MusculoskeletalSystem, required=True, db_field="sistema_musculo_esqueletico")
    hematological_system = EmbeddedDocumentField(HematologicalSystem, required=True, db_field="sistema_hematologico")
    nervous_system = EmbeddedDocumentField(NervousSystem, required=True, db_field="sistema_nervioso")
    psychic_system = EmbeddedDocumentField(PsychicSystem, required=True, db_field="sistema_psiquico")
class FollowUp(EmbeddedDocument):
    treatment_changes = ListField(StringField(), required=False, db_field="cambios_tratamiento")
    current_symptoms = ListField(StringField(), required=True, db_field="sintomas_actuales")
    treatment_effects = ListField(StringField(), required=False, db_field="efectos_tratamiento")
    ##Seguimiento psicologia
    ##Diagnostico actual

class MedicalForm(Document):
    meta = {"collection": "formato_medico"}

    ##Date and record number
    date_modified = DateField(default=datetime.utcnow, db_field="ultima_modificacion")
    record_num = IntField(required=True, unique=True, db_field="num_expediente")
    ##General data
    name = StringField(required=True, db_field="nombre")
    sex = StringField(required=True, db_field="sexo")
    birth_date = DateField(required=True, db_field="fecha_naciemiento")
    age = IntField(required=True, db_field="edad")
    birth_place = StringField(required=True, db_field="lugar_nacimiento")
    email = StringField(required=True, db_field="correo")
    ##Address
    street = StringField(required=True, db_field="calle")
    num = IntField(required=True, db_field="num")
    suburb = StringField(required=True, db_field="colonia")
    locality = StringField(required=True, db_field="localidad") #localidad??
    municipality = StringField(required=True, db_field="muicipio")
    zip_code = IntField(required=True, db_field="cp")
    phone = IntField(required=True, db_field="tel")
    phone2 = IntField(required=False, db_field="tel2")
    ##Derechohabiencia ???
    insurance = StringField(required=True, db_field="derechohabiencia")
    #Scholarship
    scholarship = StringField(required=True, db_field="escolaridad")
    ##More general data
    ocupation = StringField(required=True, db_field="ocupacion")
    religion = StringField(required=True, db_field="religion")
    civil_state = StringField(required=True, db_field="estado_civil")
    ##Emergency contact
    emergency_contact = EmbeddedDocumentField(EmergencyContact, required=True, db_field="emergencia_contacto")
    ##Hereditary family history
    family_history = EmbeddedDocumentListField(FamilyHistory, required=True, db_field="antecedentas_familiares")
    
    ##Non-pathological personal history
    non_pathological_history = EmbeddedDocumentField(NonPathological, required=True, db_field="antecedentes_no_patologicos")

    ##Pathological personal history
    pathological_history = EmbeddedDocumentField(Pathological, required=True, db_field="antecedentes_patologicos")

    ##Apparatus and body systems
    apparatus_and_systems = EmbeddedDocumentField(ApparatusAndSystems, required=True, db_field="aparatos_y_sistemas")

    ##Exploracion fisica

    ##Follow-up
    follow_up = EmbeddedDocumentField(FollowUp, required=True, db_field="seguimiento")

    def __str__(self):
        return f"MedicalForm({self.record_num})"

    def __repr__(self):
        return self.__str__()

class Patients(Document):
    meta = {"collection": "pacientes"}

    folio = StringField(required=True, unique=True, db_field="folio")
    name = StringField(required=True, db_field="nombre")
    paternal_last_name = StringField(
        required=False, db_field="apellido_paterno")
    maternal_last_name = StringField(
        required=False, db_field="apellido_materno")
    sex = StringField(
        required=True, db_field="sexo")
    ##companions = ListField(EmbeddedDocumentField(), required=False, db_field="acompañante")
    ##medical_forms = ListField(ReferenceField(MedicalForm, required=False, db_field="formularios_medicos"))
    ##social_forms = ListField(ReferenceField(SocioeconomicForm, required=False, db_field="formularios_socioeconomicos"))
    
    def __str__(self):
        return f"Patient({self.name + ' ' + self.paternal_last_name})"

    def __repr__(self):
        return self.__str__()

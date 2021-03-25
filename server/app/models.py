from werkzeug.security import generate_password_hash, check_password_hash
from flask_mongoengine import Document
from mongoengine import StringField, IntField, ListField, BooleanField, DateField
from flask_login import UserMixin

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
    companions = ListField(StringField(), required=False, db_field="acompañante")
    medical_forms = ListField(StringField(), required=False, db_field="formularios_medicos")
    social_forms = ListField(StringField(), required=False, db_field="formularios_socioeconomicos")
    
    def __str__(self):
        return f"Patient({self.name + ' ' + self.paternal_last_name})"

    def __repr__(self):
        return self.__str__()


class SocioeconomicForm(Document):
    meta = {"collection": "formato_socioeconomico"}

    record_num = IntField(required=True, unique=True, db_field="num_expediente")
    chemotherapy = BooleanField(required=True, db_field="quimioterapia")
    hostel = BooleanField(required=True, db_field="albergue")
    admission_date = DateField(required=True, db_field="fecha_ingreso")
    discharge_date = DateField(required=True, db_field="fecha_egreso")
    ##General data
    
    
    def __str__(self):
        return f"SocioeconomicForm({self.record_num})"

    def __repr__(self):
        return self.__str__()

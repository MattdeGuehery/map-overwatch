import os
from dotenv import load_dotenv
load_dotenv(dotenv_path='./.env')


def env_processor(request):
    DEBUG = os.getenv('DJANGO_DEBUG', False)
    return {'debug': DEBUG}

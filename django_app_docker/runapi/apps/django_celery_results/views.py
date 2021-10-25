"""Views."""
# from __future__ import absolute_import, unicode_literals

from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from celery import states
from celery.result import AsyncResult
from celery.utils import get_full_cls_name
from celery.utils.encoding import safe_repr


@api_view(['GET'])
def is_task_successful(request, task_id):
    """Return task execution status in JSON format."""
    # return JsonResponse({'task': {
    #     'id': task_id,
    #     'executed': AsyncResult(task_id).successful(),
    # }})

    data = {'task': {
        'id': task_id,
        'executed': AsyncResult(task_id).successful(),
    }}
    return Response(data, status=status.HTTP_200_OK)


@api_view(['GET'])
def task_status(request, task_id):
    """Return task status and result in JSON format."""
    result = AsyncResult(task_id)
    state, retval = result.state, result.result
    response_data = {'id': task_id, 'status': state, 'result': retval}
    if state in states.EXCEPTION_STATES:
        traceback = result.traceback
        response_data.update({'result': safe_repr(retval),
                              'exc': get_full_cls_name(retval.__class__),
                              'traceback': traceback})

    data = {'task': response_data}
    # return JsonResponse({'task': response_data})
    return Response(data, status=status.HTTP_200_OK)
